import {createBrowserRouter} from "react-router";
import App from "../App.tsx";
import UsersJsonPlaceholder from "../components/UsersJsonPlaceholder";
import UsersDummyJson from "../components/UsersDummyJson.tsx";
import CommentsJsonPlaceholder from "../components/CommentsJsonPlaceholder.tsx";
import PostsJsonPlaceholder from "../components/PostsJsonPlaceholder";
import PostsDummyJson from "../components/PostsDummyJson";

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
                ]
            } ]} ])


