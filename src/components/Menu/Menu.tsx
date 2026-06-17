import { NavLink } from "react-router-dom";

export  const Menu = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/users">Users</NavLink>
                </li>

                <li>
                    <NavLink to="/posts">Posts</NavLink>
                </li>

                <li>
                    <NavLink to="/comment">Comments</NavLink>
                </li>

                <li>
                    <NavLink to="/complex">Complex</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;