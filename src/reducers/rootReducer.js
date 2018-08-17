import { combineReducers } from 'redux';
import tabReducer from "./tabReducer";
import userNameReducer from './userNameReducer';

export default combineReducers({
    tab: tabReducer,
    userprops: userNameReducer
});