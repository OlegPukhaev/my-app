import { ADD_TODO, DEL_TODO } from "../constans";

export let addTodo = (value) => {
    return {
        type: ADD_TODO, 
        payload: value
    }
}
export let delTodo = (value) => {
    return {
        type: DEL_TODO, 
        payload: value
    }
}



// export const deleteTodo = id => ({ type: types.DELETE_TODO, id })

export default addTodo;