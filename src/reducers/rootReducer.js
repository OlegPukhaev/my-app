import { combineReducers } from 'redux';
import tabReducer from "./tabReducer";
import userNameReducer from './userNameReducer';
import CardReducer from './CardReducer';
import winStateToggler from './winStateToggler';
import CommentReducer from './CommentReducer';

export default combineReducers({
    tab: tabReducer,
    userprops: userNameReducer,
    cards: CardReducer,
    winstate: winStateToggler,
    storecomments: CommentReducer
})