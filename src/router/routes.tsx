import {createBrowserRouter} from "react-router";
import App from "../App.tsx";
import UsersComponent from "../components/UsersComponent.tsx";
import PostsComponent from "../components/PostsComponent.tsx";
import CommentsComponent from "../components/CommentsComponent.tsx";

export const routes = createBrowserRouter([
    { path: '/', element: <App/>, children: [
            {path: "users", element:<UsersComponent/>},
            {path: "posts", element:<PostsComponent/>},
            {path: "comments", element:<CommentsComponent/>},
            {path: "products", element:<PostsComponent/>}
        ]},
])