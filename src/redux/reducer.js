import cartReducer from './cartReducer';
import userReducer from './userReducer';
import { combineReducers } from 'redux';

export const reducer = combineReducers({
    cart: cartReducer,
    user: userReducer
})