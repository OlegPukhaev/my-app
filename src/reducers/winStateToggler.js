import { WIN_STATE } from "../constans";

let initialState = {
    addCardWinState: false
}

let winStateToggler = (state = initialState, action) => {
    // alert("fff" + action.payload);
    switch (action.type) {
        
        case WIN_STATE: 
           return state = {
                ...state,
                addCardWinState: action.payload
            }
            break;
        default: return state;
    }
};

export default winStateToggler;