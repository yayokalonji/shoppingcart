import { createStore } from 'redux';
import CartItems from '../reducers/cart-items';
import StoresItems from '../reducers/stores-items';
import {combineReducers} from 'redux-immutable';

const rootReducers = combineReducers({
    cart : CartItems,
    store : StoresItems
});

export default store = createStore(rootReducers)