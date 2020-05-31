import { createStore, combineReducers } from "redux";
import productsReducer from "./reducers/productsReducer";
import cartProductReducer from "./reducers/cartProductReducer";

let reducers = combineReducers({
    productsPage: productsReducer,
    cartProductPage: cartProductReducer
});

let store = createStore(reducers)

window.store = store;

export default store;