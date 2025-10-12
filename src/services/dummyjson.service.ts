import type { UserModel } from "../models/UserModel";
import type { PostModel } from "../models/PostModel";
import type { CommentModel } from "../models/CommentModel";

const BASE = import.meta.env.VITE_API_BASE_DUMMY_URL;

// Users
export const loadUsersFromDummyJson = async (): Promise<UserModel[]> => {
    const response = await fetch(`${BASE}/users`);
    if (!response.ok) throw new Error("Failed to load users");
    const data = await response.json();
    return data.users;
};

// Posts
export const loadPostsFromDummyJson = async (): Promise<PostModel[]> => {
    const response = await fetch(`${BASE}/posts`);
    if (!response.ok) throw new Error("Failed to load posts");
    const data = await response.json();
    return data.posts;
};

// Comments
export const loadCommentsFromDummyJson = async (): Promise<CommentModel[]> => {
    const response = await fetch(`${BASE}/comments`);
    if (!response.ok) throw new Error("Failed to load comments");
    const data = await response.json();
    return data.comments;
};
