import { useEffect, useState } from "react";
import { loadUsersFromJsonPlaceholder } from "../services/jsonplaceholder.service";
import type { UserModel } from "../models/UserModel";

const UsersJsonPlaceholder = () => {
    const [users, setUsers] = useState<UserModel[]>([]);

    useEffect(() => {
        loadUsersFromJsonPlaceholder().then(setUsers);
    }, []);

    return (
        <div>
            <h2>Users from JSONPlaceholder</h2>
            {users.map(user => (
                <div key={user.id}>
                    {user.id}. {user.name} ({user.email})
                </div>
            ))}
        </div>
    );
};

export default UsersJsonPlaceholder;

