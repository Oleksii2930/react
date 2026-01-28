import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {userActions} from "../redux/slices/UserSlice.ts";
import {postActions} from "../redux/slices/PostSlice.ts";
import {commentActions} from "../redux/slices/CommentSlice.ts";
import type {IUser} from "../models/IUser.ts";
import type {IPost} from "../models/IPost.ts";
import type {IComment} from "../models/IComment.ts";

const ComplexPage = () => {

    const dispatch = useAppDispatch();
const {commentStoreSlice:{comments}, postStoreSlice:{posts}, userStoreSlice:{users}} = useAppSelector(state => state);

useEffect(() => {
    if(!users.length){
        dispatch(userActions.loadUsers());
    }
    if(!posts.length){
        dispatch(postActions.loadPosts());
    }
    if(!comments.length){
        dispatch(commentActions.loadComments());
    }
},[])
return (
        <div>
            {users.map((user:IUser) => (<div key={user.id}>{user.name}</div>))}
            {posts.map((post:IPost) => (<div key={post.id}>{post.title}</div>))}
            {comments.map((comment:IComment) => (<div key={comment.id}>{comment.email}</div>))}

        </div>
    );
};

export default ComplexPage;