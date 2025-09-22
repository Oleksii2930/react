import type {FC} from "react";
import type {ComentModel} from "../../models//ComentModel.ts";

type PropType = { coment: ComentModel };
export const Coment:FC<PropType> = ({coment:{name, email, id,body}}) => {
    return (
        <div>
          <h2>{id} {name} </h2>
            <p className="coment-email">{email}</p>
            <p>{body.toString()}</p>
        </div>
    );
};
