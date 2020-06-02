const SEND_ORDER = 'SEND_ORDER';

let initialState = {
  order: '',
};

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_ORDER:
      return {
        ...state,
        order: [action.payload]
      };
    default:
      return state;
  }
}

export const sendOrder = (formData, selectedItems) => ({ type: SEND_ORDER, payload: {formData, selectedItems} })

export default checkoutReducer;