import { orderAPI } from "../../api/api";

const SEND_ORDER = 'SEND_ORDER';

let initialState = {
  order: '',
};

const quickOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_ORDER:
      return {
        ...state,
        order: action.payload
      };
    default:
      return state;
  }
}

export const sendOrder = (data) => ({ type: SEND_ORDER, payload: { data } })

export const quickOrder = (products, quickOrderForm, totalPrice) => {
  return (dispatch) => {
    orderAPI.postQuickOrder(products, quickOrderForm, totalPrice).then(response => {
      dispatch(sendOrder(response.data))
    });
  }
}

export default quickOrderReducer;