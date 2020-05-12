import { createStore, combineReducers } from "redux";
import menTShirtsReducer from "./reducers/menTShirtsReducer";
import cartProductReducer from "./reducers/cartProductReducer";

let reducers = combineReducers({
    menTShirtsPage: menTShirtsReducer,
    cartProductPage: cartProductReducer
});

let store = createStore(reducers)

window.store = store;

export default store;