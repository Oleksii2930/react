import { useState, useEffect } from "react";
import "./posts.css";
import type {PostModel} from "../../models//postModel.ts"
import {loadPosts} from "..//..//service/api.service";
import {Post} from "..//post//post.tsx"

export const Posts = () => {
    const [posts, setPosts] = useState<PostModel[]>([]);

    useEffect(() => {
        loadPosts().then(setPosts); // коротший запис
    }, []);

    return (
        <div>
            {posts.map((post) => (
                <Post post={post} key={post.id} />
            ))}
        </div>
    );
};