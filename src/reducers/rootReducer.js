import { combineReducers } from 'redux';
import tabReducer from "./tabReducer";
import userNameReducer from './userNameReducer';
import CardReducer from './CardReducer';

export default combineReducers({
    tab: tabReducer,
    userprops: userNameReducer,
    cards: CardReducer
});