import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import type {IUser} from "../../models/IUser.ts";
import  {getAllUsers} from "../../service/api.service.ts";
import {UserComponent} from "../user/UserComponent.tsx";

const Some = () => {

    const [users, setUsers] = useState<IUser[]>([])
    const [query] = useSearchParams()
    useEffect(() => {
        const pg = query.get('pg');
        getAllUsers(pg || '1').then(value => setUsers(value.data));
    }, [query])
    return (
        <div>
            {
                users.map((value) => <UserComponent key={value.id} item={value}/>)
            }
        </div>
    );
};

export default Some;