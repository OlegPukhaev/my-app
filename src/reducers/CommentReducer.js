const ADD_COMMENT = 'ADD_COMMENT';
const DEL_COMMENT = 'DEL_COMMENT';
const CHANGE_COMMENT = 'CHANGE_COMMENT';
const DELL_TASK_COMMENT = 'DELL_TASK_COMMENT';

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
 
export function addComment(value) {
    return dispatch => {
      dispatch({
        type: ADD_COMMENT, 
        payload: value
      });
    };
  }

  export function delComment(value) {
    return dispatch => {
      dispatch({
        type: DEL_COMMENT, 
        payload: value
      });
    };
  }

  export function changeComment(value, id, username) {
    return dispatch => {
      dispatch({
        type: CHANGE_COMMENT, 
        payload: value,
        commentid: id,
        user: username      
      });
    };
  }

  export function delTaskComments(value) {
    return dispatch => {
      dispatch({
        type: DELL_TASK_COMMENT,
        payload: value
      });
    };
  }

  const actionsMap = {
    [ADD_COMMENT]: (state, action) => {
      return {
        ...state, 
        comments: [...state.comments, action.payload]
      };
    },
    [DEL_COMMENT]: (state, action) => {
        state.comments.splice(action.payload,1);
        return {
          ...state,
          comments: [...state.comments, state.comments]
        };
    },
    [DELL_TASK_COMMENT]: (state, action) => {
      var array = state.comments.filter(function(item){return item.taskid != action.payload;});
      return {
        ...state,
        comments: array
      };
    },
    [CHANGE_COMMENT]: (state, action) => {
      state.comments[action.commentid].comment = action.payload;
      state.comments[action.commentid].autor = action.user;
      return {
        ...state,
        comments: [...state.comments, state.comments]
      };
    }
  };

export default function CommentReducer(state = initialState, action) {
    const reduceFn = actionsMap[action.type];
    if (!reduceFn) return state;
    return reduceFn(state, action);
  }