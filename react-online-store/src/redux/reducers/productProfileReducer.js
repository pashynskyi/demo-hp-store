import { productsAPI } from "../../api/api";

const SET_SELECTED_PRODUCT = 'SET_SELECTED_PRODUCT';
const RESET_SELECTED_PRODUCT = 'RESET_SELECTED_PRODUCT';

let initialState = {
  selectedProduct: '',
  isProductReady: false
};

const productProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload,
        isProductReady: true
      };
      case RESET_SELECTED_PRODUCT:
        return {
          ...state,
          selectedProduct: '',
          isProductReady: false
        };
    default:
      return state;
  }
}

export const setSelectedProduct = (product) => ({ type: SET_SELECTED_PRODUCT, payload: product })
export const resetSelectedProduct = () => ({type: RESET_SELECTED_PRODUCT})

export const requestSelectedProduct = (productId) => {
  return (dispatch) => {
    productsAPI.getSelectedProduct(productId).then(response => {
      dispatch(setSelectedProduct(response))
    })
  } 
}

export default productProfileReducer;