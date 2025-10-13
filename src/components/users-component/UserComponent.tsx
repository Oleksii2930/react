import type { FC } from "react";

import type {IUser} from "../../models/IUser.ts";

interface UserComponentProps {
    user: IUser;
}

export const UserComponent: FC<UserComponentProps> = ({user}) => {
    return (
        <div>
            {user.username}
        </div>
    );
};

