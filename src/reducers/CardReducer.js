import { ADD_CARD } from "../constans";

let initialState = [
    {
        addCardShowWin: false,
        tabId:"tab1",
        taskId:1,
        title: "Купить бочку для пивка",
        description:"Размазать сельдерей по бочке для лудшего запаха",
        autor:"Неизвестная Личность"
    },
    {
        addCardShowWin: false,
        tabId:"tab2",
        taskId:2,
        title: "Рыыыыбууууу выкинь",
        description:"Сделать из рыбы пельмени",
        autor:"Неизвестная Личность"
    },
    {
        addCardShowWin: false,
        tabId:"tab1",
        taskId:3,
        title: "Купить бочку для пивка 222",
        description:"Размазать сельдерей по бочке для лудшего запаха",
        autor:"Неизвестная Личность"
    },
    {
        addCardShowWin: false,
        tabId:"tab4",
        taskId:4,
        title: "Купить бочку для пивка",
        description:"Размазать сельдерей по бочке для лудшего запаха",
        autor:"Неизвестная Личность"
    }
];

let CardReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_CARD: 
           return state = {
                ...state,
                userName: action.payload,
                activeWin: action.togler
            }
            break;
        default: return state;
    }
};

export default CardReducer;