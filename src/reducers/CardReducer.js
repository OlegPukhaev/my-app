import { ADD_CARD, DEL_CARD } from "../constans";

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
    var cardsclone;
    var jjj;

    switch (action.type) {
        
        case ADD_CARD: 
        return state = {...state, card: [...state.card, action.payload]}    
        break;
        case DEL_CARD:
            // state.card.splice(action.payload,1);
            // cardsclone = Object.assign({}, state.card)
            state.card.splice(action.payload,1)
        return state = {
            ...state,
            card: [...state.card, state.card]
        } 
             
        // return state = {...state, card: [...state.card.splice(action.payload-1, 1)]}    
        
        // return state.card.splice(action.payload, 1)   
        // data.splice(id, 1);
        // return state = {...state, card: [...state.card, action.payload]}    
        
        break;
        default: return state;
    }
};

export default CardReducer;