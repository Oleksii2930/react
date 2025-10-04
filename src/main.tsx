import {createRoot} from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route} from "react-router";
import UsersComponent from "./components/UsersComponent.tsx";
import PostsComponent from "./components/PostsComponent.tsx";
import CommentsComponent from "./components/CommentsComponent.tsx";
import App from "./App";

createRoot(document.getElementById('root')!)
    .render(<BrowserRouter>
        <Routes>
            <Route path={'/'} element={<App/>}>
                <Route path={'users'} element={<UsersComponent/>}/>
                <Route path={'posts'} element={<PostsComponent/>}/>
                <Route path={'comments'} element={<CommentsComponent/>}/>
                <Route path={'products'} element={<PostsComponent/>}/>
            </Route>

        </Routes>
    </BrowserRouter>);
