import type {FC} from "react";
import { useEffect, useState } from "react";

type User = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
};

const UsersDummyJson: FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://dummyjson.com/users")
            .then(res => res.json())
            .then(data => {
                setUsers(data.users); // бо об’єкти приходять у data.users
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading) return <h3>Loading...</h3>;

    return (
        <div>
            <h2>Users from DummyJSON</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <b>{user.firstName} {user.lastName}</b> – {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersDummyJson;
