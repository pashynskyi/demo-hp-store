import { orderAPI } from "../../api/api";

const SET_ORDER = 'SET_ORDER';
const CLEAR_ORDER = 'CLEAR_ORDER';

let initialState = {
  order: '',
};

const quickOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER:
      return {
        ...state,
        order: action.payload
      };
    case CLEAR_ORDER:
      return {
        ...state,
        order: ''
      };
    default:
      return state;
  }
}

export const setOrder = (data) => ({ type: SET_ORDER, payload: data })
export const clearOrder = () => ({ type: CLEAR_ORDER })

export const quickOrder = (products, quickOrderForm, totalPrice) => {
  return (dispatch) => {
    orderAPI.postQuickOrder(products, quickOrderForm, totalPrice).then(response => {
      dispatch(setOrder(response))
    });
  }
}

export const postCheckout = (token) => {
  return (dispatch) => {
    orderAPI.postCheckout(token).then(response => {
      dispatch(setOrder(response))
    });
  }
}

export default quickOrderReducer;