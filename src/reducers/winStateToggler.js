import { WIN_STATE } from "../constans";

let initialState = {
    addCardWinState: false,
    addcardid: null
}

let winStateToggler = (state = initialState, action) => {
    switch (action.type) {
        
        case WIN_STATE: 
           return state = {
                ...state,
                addCardWinState: action.payload,
                addcardid: action.addci
            }
            break;
        default: return state;
    }
};

export default winStateToggler;