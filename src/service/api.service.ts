import {TodoModel} from "../models/TodoModel.ts";


 const endpointTodos = import.meta.env.VITE_API_BASE_URL + '/todos'


const loadTodos = async () => {
const response:TodoModel[] = await fetch(endpointTodos)
    .then(value => value.json())
return response
}
export {loadTodos}

