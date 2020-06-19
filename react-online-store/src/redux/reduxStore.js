import { createStore, combineReducers, applyMiddleware } from "redux";
import productsReducer from "./reducers/productsReducer";
import cartProductReducer from "./reducers/cartProductReducer";
import quickOrderReducer from "./reducers/quickOrderReducer";
import loginReducer from "./reducers/loginReducer";
import profileReducer from "./reducers/profileReducer";
import registerReducer from "./reducers/registerReducer";
import { reducer as formReducer } from "redux-form";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
    productsPage: productsReducer,
    cartProductPage: cartProductReducer,
    quickOrderPage: quickOrderReducer,
    loginPage: loginReducer,
    profilePage: profileReducer,
    registerPage: registerReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;