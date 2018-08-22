const ADD_USER = 'ADD_USER';

let initialState = {
    activeWin: true,
    userName: "User"
}

export let addUser = (value) => {
    return {
        type: ADD_USER, 
        togler: false,
        payload: value
    }
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