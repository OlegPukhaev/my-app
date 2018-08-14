import {createStore} from 'redux';
import rootReduser from './reducers/rootReducer';

export default createStore(rootReduser);