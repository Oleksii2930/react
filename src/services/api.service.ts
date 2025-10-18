import type {IUserResponseModel} from "../models/IUserResponseModel.ts";
import type {ICartResponseModel} from "../models/ICartResponseModel.ts";

const baseURL = "http://dummyjson.com"

export const userService = {
getAllUsers: async ():Promise<IUserResponseModel> => {
    return await fetch(baseURL+'/users')
        .then(value => value.json())
}
}
export  const cartService = {
    getCartsOfUser: async (userId:string):Promise<ICartResponseModel>=>{
        return await fetch(baseURL+ "/carts/user/" + userId)
            .then(res => res.json())
}
}