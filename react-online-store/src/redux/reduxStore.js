import { createStore, combineReducers } from "redux";
import productsReducer from "./reducers/productsReducer";
import cartProductReducer from "./reducers/cartProductReducer";
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    productsPage: productsReducer,
    cartProductPage: cartProductReducer,
    form: formReducer
});

let store = createStore(reducers)

window.store = store;

export default store;