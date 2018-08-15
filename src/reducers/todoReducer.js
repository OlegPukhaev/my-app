import { ADD_TODO } from "../constans";

let initialState = [{id:1, title: 'Выучить redux'}];
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
//                 },
//         ]
//     },
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
//                 },
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
//                 },
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
//                 },
//         ]
//     } 

// ];

let todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            // alert("111");
            return [...state, {id: action.payload.id, title: action.payload.title}];
        default:return state;
    }
};

export default todoReducer;