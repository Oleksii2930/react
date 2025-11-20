import  axios from "axios";
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
import type {IProducts} from "../models/IProducts.ts";
import type {IProductsResponseModelType} from "../models/IProductsResponseModelType.ts";
import {retriveLocalStorege} from "./helpers.ts";
import type {ITokenPair} from "../models/ITokenPair.ts";

type LoginData = {
    username: string,
    password: string,
    expiresInMins: number,
}
const axiosInstance= axios.create({
    baseURL: "https://dummyjson.com/auth",
    headers: {}
})
//налаштований HTTP-клієнт



axiosInstance.interceptors.request.use((requestObject) => {
    if (requestObject.method?.toUpperCase() === "GET") {
        requestObject.headers.authorization = "Bearer " + retriveLocalStorege<IUserWithTokens>('user').accessToken;
        retriveLocalStorege<IProductsResponseModelType[]>('products');
            }
    return requestObject;
} )   // Перехоплювати всі запити. Це функція, яка виконується перед кожним запитом.


export const login  = async ({username, password,expiresInMins}:LoginData):Promise<IUserWithTokens> => {

    const {data:userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login',{username, password, expiresInMins})
    localStorage.setItem("user",JSON.stringify(userWithTokens));
    return  userWithTokens;
}
//авторизація користувача

export const loadAuthProducts  = async ():Promise<IProducts[]> => {

    const {data:{products}} = await axiosInstance.get<IProductsResponseModelType>('/products');
    console.log(products);
    return products
}

export  const refresh= async  () => {
    const iUserWithTokens =  retriveLocalStorege<IUserWithTokens>('user'); //дістали з локал стореджу чувачка
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {
    refreshToken:retriveLocalStorege<IUserWithTokens>('user').refreshToken,
    expiresInMin:1});  // отримали для нього оновлені токени


    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken; // замінили токени на нові
    localStorage.setItem("user", JSON.stringify(iUserWithTokens)); // запхали в локалсторедж вже нові
}