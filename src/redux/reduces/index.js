import { combineReduces } from 'redux';
import { productReducer } from './productReducer';

const reducers = combineReduces({
    allproducts: productReducer,
});

export default reducers;
