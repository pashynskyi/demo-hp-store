const ADD_PRODUCT = 'ADD_CART_PRODUCTS';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

let initialState = {
  items: []
};

const cartProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        items: [
          ...state.items,
          action.payload
        ]
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        items: state.items.filter(e => e.productId !== action.payload)
      };
    default:
      return state;
  }
}

export const addToCart = (obj) => ({ type: ADD_PRODUCT, payload: obj })
export const removeFromCart = (productId) => ({ type: REMOVE_PRODUCT, payload: productId })

export default cartProductReducer;