const ADD_USER = 'ADD_USER';

let initialState = {
    activeWin: true,
    userName: "User"
}

export function addUser(value) {
    return dispatch => {
      dispatch({
        type: ADD_USER, 
        togler: false,
        payload: value
      });
    };
  }

  const actionsMap = {
    [ADD_USER]: (state, action) => {
      return {
        ...state,
        userName: action.payload,
        activeWin: action.togler

      };
    }
  };

export default function userNameReducer(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}