import { EDIT_COL1, EDIT_COL2, EDIT_COL3, EDIT_COL4, SHOW_FORM } from "../constans";

let initialState = {
    formstate: null,
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
    // alert(action.type);
    switch (action.type) {
        case SHOW_FORM: 
           return state = {
                ...state,
                formstate: action.payload
                
            }
            break;
        case EDIT_COL1: 
           return state = {
                ...state,
                colname1: action.payload
            }
            break;
        case EDIT_COL2: 
           return state = {
                ...state,
                colname2: action.payload
            }
            break;
        case EDIT_COL3: 
           return state = {
                ...state,
                colname3: action.payload
            }
            break;
        case EDIT_COL4: 
           return state = {
                ...state,
                colname4: action.payload
            }
            break;
        default: return state;
    }
};

export default tabReducer;