const WIN_STATE = 'WIN_STATE';

let initialState = {
    addCardWinState: false,
    addcardid: null
}

export let winState = (value, cardid) => {
	return {
			type: WIN_STATE, 
			payload: value,
			addci: cardid
	}
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