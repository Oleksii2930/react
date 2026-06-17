import type {IUser} from "../models/IUser.ts";

const baseUrl = 'http://jsonplaceholder.typicode.com';

export  const getAll = async <T,>(endpoint:string) => {
    const responseResult = await fetch(`${baseUrl}${endpoint}`).then((response:Response) => response.json());
    return responseResult as T;
}

export const all = getAll<IUser[]>('/users')










// export const userService = {
//     getAllUsers: async ():Promise<IUser[]> => {
//         const users = await fetch(`${baseUrl}/users`)
//         .then(res => res.json())
//         console.log(users);
//         return users;
//     }
// }
// const postService = {}
// const commentService = {}