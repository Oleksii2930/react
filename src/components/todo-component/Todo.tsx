import type {FC} from "react";
import type {TodoModel} from "../../models/TodoModel.ts";

type PropType = { todo: TodoModel };
export const Todo:FC<PropType> = ({todo:{todo,id,completed}}) => {
    return (
        <div>
            {id} {todo} {completed.toString()}
        </div>
    );
};