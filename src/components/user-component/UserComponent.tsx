import type {IUser} from "../../models/IUser.ts";
import type {FC} from "react";

type UserPropType = {
    item: IUser
}


const UserComponent:FC<UserPropType> = ({item}) => {
    return (
        <div>{item.name}</div>
    );
};

export default UserComponent;