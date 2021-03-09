import cartReducer from './cartReducer';
import { combineReducers } from 'redux';

export const reducer = combineReducers({
    cart: cartReducer
})