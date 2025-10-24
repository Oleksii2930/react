import type {IReqResinResponse} from "../models/IReqResinResponse.ts";

export  const getAllUsers= async (pg:string ):Promise<IReqResinResponse> => {
    return await fetch('https://reqres.in/api/users?page=' +pg)
        .then(res => res.json())

}