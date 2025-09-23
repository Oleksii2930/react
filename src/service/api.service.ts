import type  { PostModel } from "../models/postModel";

const endpointPosts = import.meta.env.VITE_API_BASE_URL + "/posts";

type PostsResponse = {
    posts: PostModel[];
    title: string;
    body: string;
    tags: string[];
};

export const loadPosts = async (): Promise<PostModel[]> => {
    const response = await fetch(endpointPosts);
    if (!response.ok) {
        throw new Error(`Failed to fetch todos: ${response.status}`);
    }
    const data: PostsResponse = await response.json();
    return data.posts; // ✅ беремо тільки масив
};