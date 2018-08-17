import { EDIT_COL1 } from "../constans";

let initialState = {
    colid1: "tab1",
    colname1: "TODO",
    colid2: "tab2",
    colname2: "InProgress",
    colid3: "tab3",
    colname3: "Tomorrow",
    colid4: "tab4",
    colname4: "Done"
}

let tabReducer = (state = initialState, action) => {

    switch (action.type) {
        case EDIT_COL1: 
           return state = {
                ...state,
                colname1: action.payload
            }
            break;
        default: return state;
    }
};

export default tabReducer;