import { ADD_TODO } from "../constans";

export let addTodo = (table = "tttttt") => {
    alert("fsdfds");
    return {
        type: ADD_TODO,
        payload: {
            table
        }
    }
}

export default addTodo;