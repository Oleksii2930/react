import { useState, useEffect } from "react";
import "./Todos.css";
import type { TodoModel } from "../../models/TodoModel";
import { loadTodos } from "../../service/api.service";
import { Todo } from "../todo-component/Todo";

export const Todos = () => {
    const [todos, setTodos] = useState<TodoModel[]>([]);

    useEffect(() => {
        loadTodos().then(setTodos); // коротший запис
    }, []);

    return (
        <div>
            {todos.map((todo) => (
                <Todo todo={todo} key={todo.id} />
            ))}
        </div>
    );
};