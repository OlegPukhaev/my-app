import { combineReducers } from 'redux';
import todoReducer from "./todoReducer";
import activeWinReducer from './ActiveWinReduser';

export default combineReducers({
    todos: todoReducer,
    showwin: activeWinReducer
});