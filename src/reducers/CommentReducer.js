import { ADD_COMMENT, DEL_COMMENT, CHANGE_COMMENT } from "../constans";

let initialState = {

    comments: [ 
        {
            taskid:1,
            comment: "Комент 1",
            autor: "Oleg"
        },
        {
            taskid:2,
            comment: "Комент 2",
            autor: "User1"
        },
        {
            taskid:3,
            comment: "Комент 3",
            autor: "User2"
        }
        
    ]
}
    

let CommentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT: 
            return state = {...state, comments: [...state.comments, action.payload]}
            break;
        case DEL_COMMENT:
            state.comments.splice(action.payload,1);
        return state = {
                ...state,
                comments: [...state.comments, state.comments]
            }
            break;
        case CHANGE_COMMENT:
            state.comments[action.cardid].title = action.payload;
        return state = {
            ...state,
            comments: [...state.comments, state.comments]
        }
        break;
        default: return state;
    }
};

export default CommentReducer;