export  interface PostModel {
    posts: PostModel[];
    userId: number;
    id: number;
    title: string;
    body: string;
    tags: string[];
}