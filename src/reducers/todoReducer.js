import { ADD_TODO, DEL_TODO, TEXT_TODO, CHANGE_OBJ } from "../constans";

let initialState = {
    result: 1,
    // lastValues: [{id: 1, name : "hhh"}]
    lastValues: [],
    tabobj: []
    

}

let todoReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TODO: 
           return state = {
                ...state,
                result: state.result + action.payload
            }
            break;
        case DEL_TODO: 
           return state = {
                ...state,
                result: state.result - action.payload
            }
            break;

        case TEXT_TODO: 
           return state = {...state, lastValues: [...state.lastValues, action.payload]}
            break;

        case CHANGE_OBJ: 
           return state = {
            ...state, 
            tabobj: action.payload
        }
            break;

        default: return state;
    }
};





// let initialState = [
//     {
//         table:"tab1", 
//         colname: 'MyToDo',
//         cards: [
//                 {
//                     "title":"Give Me some money",
//                     "desc":"Дескрипшин",
//                     "comments" :[{
//                                     "comment":"Comment 1",
//                                     "autor":"Vasya"
//                                 }],
//                     "autor" : "Oleg"
//                 }
//         ]
//     }
//     {
//         table:"tab2", 
//         colname: 'InProgress',
//         cards: [
//                 {
//                     "title":"Give Me some money",
//                     "desc":"Дескрипшин",
//                     "comments" :[{
//                                     "comment":"Comment 1",
//                                     "autor":"Vasya"
//                                 }],
//                     "autor" : "Oleg"
//                 }
//         ]
//     },
//     {
//         table:"tab3", 
//         colname: 'Tommorow',
//         cards: [
//                 {
//                     "title":"Give Me some money",
//                     "desc":"Дескрипшин",
//                     "comments" :[{
//                                     "comment":"Comment 1",
//                                     "autor":"Vasya"
//                                 }],
//                     "autor" : "Oleg"
//                 }
//         ]
//     }, 
//     {
//         table:"tab1", 
//         colname: 'Done',
//         cards: [
//                 {
//                     "title":"Give Me some money",
//                     "desc":"Дескрипшин",
//                     "comments" :[{
//                                     "comment":"Comment 1",
//                                     "autor":"Vasya"
//                                 }],
//                     "autor" : "Oleg"
//                 }
//         ]
//     } 

// ];

export default todoReducer;