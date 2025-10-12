import type {FC} from "react";
import { useEffect, useState } from "react";

type Post = {
    id: number;
    title: string;
    body: string;
};

const PostsJsonPlaceholder: FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading) return <h3>Loading...</h3>;

    return (
        <div>
            <h2>Posts from JSONPlaceholder</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <b>{post.title}</b>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsJsonPlaceholder;
