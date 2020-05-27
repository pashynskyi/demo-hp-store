const ADD_PRODUCT = 'ADD_CART_PRODUCTS';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
const ORDER_PRODUCT = 'ORDER_PRODUCT';

let initialState = {
  items: [],
  selectedItems: []
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
      debugger;
      return {
        ...state,
        items: state.items.filter(e => e.productId !== action.payload)
      };
    case ORDER_PRODUCT:
      debugger;
      return {
        ...state,
        selectedItems: [
          ...state.selectedItems,
          action.payload]
      };
    default:
      return state;
  }
}


export const addToCart = (
  selectedSize,
  productId,
  productPrice,
  productFirm,
  productType,
  productMaterial,
  pictureUrl) => ({ type: ADD_PRODUCT, payload: { selectedSize, productId, productPrice, productFirm, productType, productMaterial, pictureUrl } })

export const removeFromCart = (productId) => ({ type: REMOVE_PRODUCT, payload: productId })
export const orderProduct = (totalPrice, count, obj ) => ({ type: ORDER_PRODUCT, payload: { totalPrice, count, obj } })

export default cartProductReducer;