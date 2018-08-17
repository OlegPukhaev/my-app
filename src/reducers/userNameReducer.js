import { ADD_USER } from "../constans";

let initialState = {
    activeWin: true,
    userName: "User"
}

let userNameReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_USER: 
           return state = {
                ...state,
                userName: action.payload,
                activeWin: action.togler
            }
            break;
        default: return state;
    }
};

export default userNameReducer;