import type {FC} from "react";
import type {IUser} from "../../model/IUser.ts";
import {Link, useNavigate} from "react-router-dom";

type UserTypeProps = {
    item: IUser;

}
const UserComponent:FC<UserTypeProps> = ({item}) => {
    const navigate = useNavigate()
    const handleOnClic = () => {
        navigate('posts/' + item.id, {state: item})
    };
    return (
        <div>
            <Link to={'details'} state={item}>{item.username}</Link>
            <button onClick={handleOnClic}>go to details</button>
        </div>
    );
};

export default UserComponent;