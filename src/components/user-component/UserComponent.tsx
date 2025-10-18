
import type {IUser} from "../../models/IUser.ts";
import {useNavigate} from "react-router";
import type {FC} from "react";

type Props ={
    user:IUser;
}
export const UserComponent:FC<Props> = ({user}) => {
    const navigation = useNavigate()

    const onButtonClickNavigate = () => {
        navigation('/users/' + user.id + '/carts')
    }
    return <div className={"my-5"}>{user.username}:{user.email}
        <button onClick={onButtonClickNavigate}>click me</button>
    </div>;
}