
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

export function showFormColname(value) {
    return dispatch => {
      dispatch({
        type: SHOW_FORM, 
        payload: value      
      });
    };
  }

export function editColname(value, id) {
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
    return dispatch => {
      dispatch({
        type: typeid, 
        payload: value
      });
    };
  }

  const actionsMap = {
    [SHOW_FORM]: (state, action) => {
      return {
        ...state,
        formstate: action.payload
      };
    },
    [EDIT_COL1]: (state, action) => {
      return {
        ...state,
        colname1: action.payload
      };
    },
    [EDIT_COL2]: (state, action) => {
      return {
        ...state,
        colname2: action.payload
      };
    },
    [EDIT_COL3]: (state, action) => {
      return {
        ...state,
        colname3: action.payload
      };
    },
    [EDIT_COL4]: (state, action) => {
      return {
        ...state,
        colname4: action.payload
      };
    }
  };

export default function tabReducer(state = initialState, action) {
    const reduceFn = actionsMap[action.type];
    if (!reduceFn) return state;
    return reduceFn(state, action);
  }