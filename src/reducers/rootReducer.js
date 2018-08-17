import { combineReducers } from 'redux';
import todoReducer from "./todoReducer";
import userNameReducer from './userNameReducer';

export default combineReducers({
    todos: todoReducer,
    userprops: userNameReducer
});