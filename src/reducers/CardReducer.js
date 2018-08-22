const ADD_CARD = 'ADD_CARD';
const DEL_CARD = 'DEL_CARD';
const CHANGE_TITLE = 'CHANGE_TITLE';
const CHANGE_DESC = 'CHANGE_DESC';
const REMOVE_DESC = 'REMOVE_DESC';

let initialState = {
    card :  
        [
            {
                tabid:"tab1",
                taskid:1,
                title: "Запись 1",
                desc:"Дескрипшин дескрипшиновский",
                autor:"Неизвестная Личность"
            },
            {
                tabid:"tab2",
                taskid:2,
                title: "Запись 2 ",
                desc:"Дескрипшин дескрипшиновский 2",
                autor:"Неизвестная Личность"
            },
            {
                tabid:"tab1",
                taskid:3,
                title: "Запись3",
                desc:"Дескрипшин дескрипшиновский 3",
                autor:"Неизвестная Личность"
            },
            {
                tabid:"tab4",
                taskid:4,
                title: "Запись4",
                desc:"Дескрипшин дескрипшиновский 4",
                autor:"Неизвестная Личность"
            },
            {
                tabid:"tab3",
                taskid:5,
                title: "Запись5",
                desc:"Дескрипшин дескрипшиновский 5",
                autor:"Неизвестная Личность"
            },
            {
                tabid:"tab4",
                taskid:6,
                title: "Запись6",
                desc:"Дескрипшин дескрипшиновский 6",
                autor:"Неизвестная Личность"
            }
        ]
    }

export function addCard(value) {
    return dispatch => {
      dispatch({
        type: ADD_CARD, 
        payload: value      
      });
    };
  }

export function delCard(value) {
	return dispatch => {
		dispatch({
			type: DEL_CARD, 
			payload: value		 
		});
	};
}

export function changeTitle(value, id) {
	return dispatch => {
		dispatch({
			type: CHANGE_TITLE, 
			payload: value,
			cardid: id	 
		});
	};
}

export function changeDesc(value, id) {
	return dispatch => {
		dispatch({
			type: CHANGE_DESC, 
			payload: value,
			cardid: id	 
		});
	};
}

export function removeDesc(id) {
	return dispatch => {
		dispatch({
			type: REMOVE_DESC, 
			cardid: id
		});
	};
}

const actionsMap = {

	[ADD_CARD]: (state, action) => {
		return {
					...state, 
					card: [...state.card, action.payload]
		};
	},
	[DEL_CARD]: (state, action) => {
		state.card.splice(action.payload,1);
		return {
								...state,
								card: [...state.card, state.card]
		};
	},
	[CHANGE_TITLE]: (state, action) => {
		state.card[action.cardid].title = action.payload;
		return {
								...state,
								card: [...state.card, state.card]
		};
	},
	[CHANGE_DESC]: (state, action) => {
			state.card[action.cardid].desc = action.payload;
		return {
								...state,
								card: [...state.card, state.card]
				};
		},
	[REMOVE_DESC]: (state, action) => {
		state.card[action.cardid].desc = "";
		return {
					...state,
					card: [...state.card, state.card]
				};
		}
};

export default function CardReducer(state = initialState, action) {
    const reduceFn = actionsMap[action.type];
    if (!reduceFn) return state;
    return reduceFn(state, action);
  }