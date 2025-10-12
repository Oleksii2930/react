import {createBrowserRouter} from "react-router";
import App from "../App.tsx";
import UsersJsonPlaceholder from "../pages/UsersJsonPlaceholder.tsx";
import UsersDummyJson from "../pages/UsersDummyJson.tsx";
import CommentsJsonPlaceholder from "../pages/CommentsJsonPlaceholder.tsx";
import PostsJsonPlaceholder from "../pages/PostsJsonPlaceholder.tsx";
import PostsDummyJson from "../pages/PostsDummyJson.tsx";
import CommentsDummyJson from "../pages/CommentsDummyJson.tsx";

export const routes = createBrowserRouter([
    { path: '/', element: <App/>, children: [
            {
                path: "users",
                children: [
                    { path: "jsonplaceholder", element: <UsersJsonPlaceholder /> },
                    { path: "dummyjson", element: <UsersDummyJson/> },
                ]
            },
            {
                path: "posts",
                children: [
                    { path: "jsonplaceholder", element: <PostsJsonPlaceholder/> },
                    { path: "dummyjson", element: <PostsDummyJson /> },
                ]
            },
            {
                path: "comments",
                children: [
                    { path: "jsonplaceholder", element: <CommentsJsonPlaceholder /> },
                    { path: "dummyjson", element: <CommentsDummyJson/> }
                ]
            } ]} ])


