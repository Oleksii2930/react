export interface ComentModel {
    comments: ComentModel[];
    postId: number;
    id: number;
    likes: number;
    body: string;
}