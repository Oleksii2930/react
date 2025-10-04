import {Link, Outlet} from "react-router";
import './Menu.css'

export const Menu = () => {
    return (
        <>
        <ul>
            <li><Link to="/users/jsonplaceholder">Users (JSONPlaceholder)</Link></li>
            <li><Link to="/users/dummyjson">Users (DummyJSON)</Link></li>
            <li><Link to="/posts/jsonplaceholder">Posts (JSONPlaceholder)</Link></li>
            <li><Link to="/posts/dummyjson">Posts (DummyJSON)</Link></li>
            <li><Link to="/comments/jsonplaceholder">Comments (JSONPlaceholder)</Link></li>
        </ul>
        <Outlet/>
        </>
    );
};

export default Menu;