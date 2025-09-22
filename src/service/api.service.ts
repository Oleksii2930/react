import type { TodoModel } from "../models/TodoModel";

const endpointTodos = import.meta.env.VITE_API_BASE_URL + "/todos";

export const loadTodos = async (): Promise<TodoModel[]> => {
 const response = await fetch(endpointTodos);
 if (!response.ok) {
  throw new Error(`Failed to fetch todos: ${response.status}`);
 }
 return response.json();
};


