import { ADD_TODO } from "../constans";

export let addTodo = (id = 2, title = 'Выучить TS') => {
    return {
        type: ADD_TODO,
        payload: {
            id, title
        }
    }
}

export default addTodo;