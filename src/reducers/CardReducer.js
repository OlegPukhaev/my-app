import { ADD_CARD } from "../constans";

let initialState = [
    {
        addCardShowWin: false,
        tabid:"tab1",
        taskid:1,
        title: "Купить бочку для пивка",
        desc:"Размазать сельдерей по бочке для лудшего запаха",
        autor:"Неизвестная Личность"
    },
    {
        addCardShowWin: false,
        tabid:"tab2",
        taskid:2,
        title: "Рыыыыбууууу выкинь",
        desc:"Сделать из рыбы пельмени",
        autor:"Неизвестная Личность"
    },
    {
        addCardShowWin: false,
        tabid:"tab1",
        taskid:3,
        title: "Купить бочку для пивка 222",
        desc:"Размазать сельдерей по бочке для лудшего запаха",
        autor:"Неизвестная Личность"
    },
    {
        addCardShowWin: false,
        tabid:"tab4",
        taskid:4,
        title: "Купить бочку для пивка",
        desc:"Размазать сельдерей по бочке для лудшего запаха",
        autor:"Неизвестная Личность"
    },
    {
        addCardShowWin: false,
        tabid:"tab3",
        taskid:5,
        title: "Купить бочку для пивка",
        desc:"Размазать сельдерей по бочке для лудшего запаха",
        autor:"Неизвестная Личность"
    },
    {
        addCardShowWin: false,
        tabid:"tab4",
        taskid:6,
        title: "Купить бочку для пивка",
        desc:"Размазать сельдерей по бочке для лудшего запаха",
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