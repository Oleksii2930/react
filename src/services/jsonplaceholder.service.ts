import type { UserModel } from "../models/UserModel";
import type { PostModel } from "../models/PostModel";
import type { CommentModel } from "../models/CommentModel";

const BASE = import.meta.env.VITE_API_BASE_JS_URL;

// Users
export const loadUsersFromJsonPlaceholder = async (): Promise<UserModel[]> => {
    const response = await fetch(`${BASE}/users`);
    if (!response.ok) throw new Error("Failed to load users");
    return response.json();
};

// Posts
export const loadPostsFromJsonPlaceholder = async (): Promise<PostModel[]> => {
    const response = await fetch(`${BASE}/posts`);
    if (!response.ok) throw new Error("Failed to load posts");
    return response.json();
};

// Comments
export const loadCommentsFromJsonPlaceholder = async (): Promise<CommentModel[]> => {
    const response = await fetch(`${BASE}/comments`);
    if (!response.ok) throw new Error("Failed to load comments");
    return response.json();
};
