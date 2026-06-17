import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {commentActions} from "../redux/slices/CommentSlice.ts";
import type {IComment} from "../models/IComment.ts";

const CommentsPage = () => {

    const dispatch = useAppDispatch();
    const comments = useAppSelector(
        state => state.commentStoreSlice.comments);
    useEffect(() => {

        dispatch(commentActions.loadComments());
    },[]);

    return (
        <div>
            {comments.map((comment:IComment) => (<div key={comment.id}>{comment.name}</div>))}

        </div>
    );
};

export default CommentsPage;