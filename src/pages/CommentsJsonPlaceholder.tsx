import type {FC} from "react";

import {useEffect, useState } from "react";

type Comment = {
    id: number;
    name: string;
    email: string;
    body: string;
};

const CommentsJsonPlaceholder: FC = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(res => res.json())
            .then(data => {
                setComments(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading) return <h3>Loading...</h3>;

    return (
        <div>
            <h2>Comments from JSONPlaceholder</h2>
            <ul>
                {comments.slice(0, 20).map(comment => ( // щоб не виводити одразу всі 500
                    <li key={comment.id}>
                        <b>{comment.name}</b> ({comment.email})
                        <p>{comment.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommentsJsonPlaceholder;
