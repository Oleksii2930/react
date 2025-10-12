import type {FC} from "react";
import { useEffect, useState } from "react";

type Comment = {
    id: number;
    body: string;
    postId: number;
    user: {
        id: number;
        username: string;
    };
};

const CommentsDummyJson: FC = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://dummyjson.com/comments")
            .then(res => res.json())
            .then(data => {
                setComments(data.comments); // ⚡ в DummyJSON дані всередині `comments`
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading) return <h3>Loading...</h3>;

    return (
        <div>
            <h2>Comments from DummyJSON</h2>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <b>{comment.user?.username}</b>: {comment.body} (Post ID: {comment.postId})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommentsDummyJson;
