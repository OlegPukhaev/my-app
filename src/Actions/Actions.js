import { ADD_USER } from "../constans";

export let addUser = (value) => {
    // alert('fff');
    return {
        type: ADD_USER, 
        togler: false,
        payload: value
    }
}

// export let delTodo = (value) => {
//     return {
//         type: DEL_TODO, 
//         payload: value
//     }
// }

// export let textTodo = (value) => {
//     // alert("fff");
//     return {
//         type: TEXT_TODO,
//         id:2, 
//         payload: value
//     }
// }

// export let changeObj = (value) => {
//     // alert("fff");
//     return {
//         type: CHANGE_OBJ,
//         payload: value
//     }
// }



// export const deleteTodo = id => ({ type: types.DELETE_TODO, id })

export default addUser;