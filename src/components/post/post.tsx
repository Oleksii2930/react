import type {FC} from "react";
import type {PostModel} from "../../models/postModel.ts";

type PropType = { post: PostModel };
export const Post:FC<PropType> = ({post:{title,id,body,}}) => {
    return (
        <div>
            <h3>
                {id}. {title}
            </h3>
            <p>{body}</p>
        </div>
    );
};