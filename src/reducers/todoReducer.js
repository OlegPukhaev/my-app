import { ADD_TODO } from "../constans";

let initialState = [
                        {
                            id:1, 
                            colname: 'MyToDo',
                            cards: [
                                    {
                                        "title":"Give Me some money",
                                        "desc":"Дескрипшин",
                                        "comments" :[{
                                                        "comment":"Comment 1",
                                                        "autor":"Vasya"
                                                    }],
                                        "autor" : "Oleg"
                                    },
                            ]
                        },
                        {
                            id:1, 
                            colname: 'InProgress',
                            cards: [
                                    {
                                        "title":"Give Me some money",
                                        "desc":"Дескрипшин",
                                        "comments" :[{
                                                        "comment":"Comment 1",
                                                        "autor":"Vasya"
                                                    }],
                                        "autor" : "Oleg"
                                    },
                            ]
                        },
                        {
                            id:1, 
                            colname: 'Tommorow',
                            cards: [
                                    {
                                        "title":"Give Me some money",
                                        "desc":"Дескрипшин",
                                        "comments" :[{
                                                        "comment":"Comment 1",
                                                        "autor":"Vasya"
                                                    }],
                                        "autor" : "Oleg"
                                    },
                            ]
                        }, 
                        {
                            id:1, 
                            colname: 'Done',
                            cards: [
                                    {
                                        "title":"Give Me some money",
                                        "desc":"Дескрипшин",
                                        "comments" :[{
                                                        "comment":"Comment 1",
                                                        "autor":"Vasya"
                                                    }],
                                        "autor" : "Oleg"
                                    },
                            ]
                        } 

                ];

let todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, {id: action.payload.id, title: action.payload.colname}];
        default:return state;
    }
};

export default todoReducer;