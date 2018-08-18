import { ADD_USER, EDIT_COL1, EDIT_COL2, EDIT_COL3, EDIT_COL4, SHOW_FORM } from "../constans";

export let addUser = (value) => {
    return {
        type: ADD_USER, 
        togler: false,
        payload: value
    }
}

export let showFormColname = (value) => {
    return {
        type: SHOW_FORM, 
        payload: value
    }
}

export let editColname = (value, id) => {
    let typeid;
    switch (id) {
        case "tab1": 
            typeid = EDIT_COL1
         break;       
        case "tab2": 
            typeid = EDIT_COL2
         break;       
        case "tab3": 
            typeid = EDIT_COL3
         break;       
        case "tab4": 
            typeid = EDIT_COL4
         break;       
    }
//    alert(typeid + value);
    return {
        type: typeid, 
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