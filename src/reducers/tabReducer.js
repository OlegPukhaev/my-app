// import { EDIT_COL1, EDIT_COL2, EDIT_COL3, EDIT_COL4, SHOW_FORM } from "../constans";

const EDIT_COL1 = 'EDIT_COL1';
const EDIT_COL2 = 'EDIT_COL2';
const EDIT_COL3 = 'EDIT_COL3';
const EDIT_COL4 = 'EDIT_COL4';
const SHOW_FORM = 'SHOW_FORM';

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

export let showFormColname = (value) => {
    return {
      type: SHOW_FORM, 
       payload: value
    }
}

export let editColname = (value, id) => {
    let typeid;
    switch (id) {
        case "tab1": 
            typeid = EDIT_COL1
         break;       
        case "tab2": 
            typeid = EDIT_COL2
            break;       
        case "tab3": 
            typeid = EDIT_COL3
         break;       
        case "tab4": 
            typeid = EDIT_COL4
         break;       
    }
    return {
        type: typeid, 
        payload: value
    }
}


let tabReducer = (state = initialState, action) => {
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