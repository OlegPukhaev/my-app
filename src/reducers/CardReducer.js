import { ADD_CARD, DEL_CARD, CHANGE_TITLE, CHANGE_DESC, REMOVE_DESC } from "../constans";

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

let CardReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case ADD_CARD: 
            return state = {...state, card: [...state.card, action.payload]}    
        break;
        case DEL_CARD:
            state.card.splice(action.payload,1);
        return state = {
            ...state,
            card: [...state.card, state.card]
        }
        break;
        case CHANGE_TITLE:
            state.card[action.cardid].title = action.payload;
        return state = {
            ...state,
            card: [...state.card, state.card]
        }
        case CHANGE_DESC:
            state.card[action.cardid].desc = action.payload;
        return state = {
            ...state,
            card: [...state.card, state.card]
        }
        case REMOVE_DESC:
            state.card[action.cardid].desc = "";
        return state = {
            ...state,
            card: [...state.card, state.card]
        }
        break;
        default: return state;
    }
};

export default CardReducer;