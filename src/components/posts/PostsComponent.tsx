import {type FC, useEffect, useState} from 'react';
import type {IPost} from "../../model/IPost.ts";
import {postsServices} from "../../services/api.service.ts";

type PostsTypeProps = {
    userId: string;
};
const PostsComponent:FC<PostsTypeProps> = ({userId}) => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
    if (userId) {
        postsServices
            .getAllPostsOfUserById(+userId)
            .then(value => {
                console.log(value);
                setPosts(value);
            });
    }

}, [userId])

    return (
        <div>
            {
                posts.map(value => <div key={value.id}>{value.title}</div>)
            }
        </div>
    );
};

export default PostsComponent;