import type {IUser} from "../models/IUser.ts";

 const getUsers = async (): Promise<IUser[]> => {
    const users = await fetch(import.meta.env.VITE_API_URL)
        .then(value => value.json())
    return users;
}
export {
     getUsers
}