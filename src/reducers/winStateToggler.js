const WIN_STATE = 'WIN_STATE';

let initialState = {
    addCardWinState: false,
    addcardid: null
}

export function winState(value, cardid) {
    return dispatch => {
      dispatch({
        type: WIN_STATE, 
        payload: value,
        addci: cardid
      });
    };
  }

const actionsMap = {
    [WIN_STATE]: (state, action) => {
      return {
        ...state,
        addCardWinState: action.payload,
        addcardid: action.addci   
      };
    }
  };

export default function winStateToggler(state = initialState, action) {
    const reduceFn = actionsMap[action.type];
    if (!reduceFn) return state;
    return reduceFn(state, action);
  }