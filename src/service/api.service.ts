import type { TodoModel } from "../models/TodoModel";

const endpointTodos = import.meta.env.VITE_API_BASE_URL + "/todos";

type TodosResponse = {
    todos: TodoModel[];
    total: number;
    skip: number;
    limit: number;
};

export const loadTodos = async (): Promise<TodoModel[]> => {
    const response = await fetch(endpointTodos);

    if (!response.ok) {
        throw new Error(`Failed to fetch todos: ${response.status}`);
    }

    const data: TodosResponse = await response.json();
    return data.todos; // ✅ беремо тільки масив
};
