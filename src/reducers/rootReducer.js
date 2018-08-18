import { combineReducers } from 'redux';
import tabReducer from "./tabReducer";
import userNameReducer from './userNameReducer';
import CardReducer from './CardReducer';
import winStateToggler from './winStateToggler';

export default combineReducers({
    tab: tabReducer,
    userprops: userNameReducer,
    cards: CardReducer,
    winstate: winStateToggler
});