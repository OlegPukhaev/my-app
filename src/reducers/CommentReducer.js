import { ADD_COMMENT, DEL_COMMENT, CHANGE_COMMENT, DELL_TASK_COMMENT } from "../constans";

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
        },
        {
            taskid:3,
            comment: "Комент 4",
            autor: "User3"
        },
        {
            taskid:1,
            comment: "Комент 5",
            autor: "User5"
        },
        {
            taskid:1,
            comment: "Комент 7",
            autor: "User2"
        },
        {
            taskid:5,
            comment: "Комент 8",
            autor: "User2"
        },
        {
            taskid:6,
            comment: "Комент 9",
            autor: "User2"
        }
        
    ]
}
    

let CommentReducer = (state = initialState, action) => {
		var array={};
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
        case DELL_TASK_COMMENT:
						array = state.comments.filter(function(item){return item.taskid != action.payload;});
        return state = {
                ...state,
                comments: array
							}
            break;
        case CHANGE_COMMENT:
            state.comments[action.commentid].comment = action.payload;
            state.comments[action.commentid].autor = action.user;
        return state = {
            ...state,
            comments: [...state.comments, state.comments]
        }
        break;
        default: return state;
    }
};

export default CommentReducer;