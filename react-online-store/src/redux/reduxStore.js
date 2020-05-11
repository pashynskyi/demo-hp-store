import { createStore, combineReducers } from "redux";
import menTShirtsReducer from "./menTShirtsReducer";

let reducers = combineReducers({
    menTShirtsPage: menTShirtsReducer,
});

let store = createStore(reducers)

window.store = store;

export default store;