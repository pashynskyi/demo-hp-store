import { createStore, combineReducers, applyMiddleware } from "redux";
import productsReducer from "./reducers/productsReducer";
import cartProductReducer from "./reducers/cartProductReducer";
import checkoutReducer from "./reducers/checkoutReducer";
import { reducer as formReducer } from "redux-form";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    productsPage: productsReducer,
    cartProductPage: cartProductReducer,
    checkoutPage: checkoutReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;