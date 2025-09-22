import type  { PostModel } from "../models/postModel";

const endpointTodos = import.meta.env.VITE_API_BASE_URL + "/posts";

export const loadPosts = async (): Promise<PostModel[]> => {
    const response = await fetch(endpointTodos);
    if (!response.ok) {
        throw new Error(`Failed to fetch todos: ${response.status}`);
    }
    return response.json();
};