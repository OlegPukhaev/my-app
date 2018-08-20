import { REMOVE_DESC, ADD_USER, EDIT_COL1, EDIT_COL2, EDIT_COL3, EDIT_COL4, SHOW_FORM, ADD_CARD, DEL_CARD, WIN_STATE, CHANGE_DESC, CHANGE_TITLE } from "../constans";

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

export let winStateToggler = (value, cardid) => {
    return {
        type: WIN_STATE, 
        payload: value,
        addci: cardid
    }
}

export let addCard = (value) => {
    return {
        type: ADD_CARD, 
        payload: value
    }
}

export let delCard = (value) => {
    return {
        type: DEL_CARD, 
        payload: value
    }
}

export let changeTitle = (value, id) => {
    return {
        type: CHANGE_TITLE, 
        payload: value,
        cardid: id
    }
}

export let changeDesc = (value, id) => {
    return {
        type: CHANGE_DESC, 
        payload: value,
        cardid: id
    }
}

export let removeDesc = (id) => {
    return {
        type: REMOVE_DESC, 
        cardid: id
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