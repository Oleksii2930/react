import type {FC} from "react";
import type {ComentModel} from "../../models//ComentModel.ts";

type PropType = { coment: ComentModel };
export const Coment:FC<PropType> = ({coment:{likes, id,body}}) => {
    return (
        <div>
            <h2>{id} {likes} </h2>
            <p>{body.toString()}</p>
        </div>
    );
};