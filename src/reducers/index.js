import {combineReducers} from 'redux';
import CarsReducers from './cards';

const allReducers = combineReducers ({
    cars: CarsReducers
    //здесь можно добавлять все хранилища чтобы пользоваться ими одновременно
});

export default allReducers;