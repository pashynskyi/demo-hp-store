import { productsAPI } from "../../api/api";

const SET_MEN_TSHIRTS = 'SET_MEN_TSHIRTS';
const SET_IS_READY = 'SET_IS_READY';
const SELECTED_SIZE = 'SELECTED_SIZE';
const SET_FILTER = 'SET_FILTER';

let initialState = {
  isReady: false,
  products: null,
  selectedSize: null,
  filterBy: 'all'
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MEN_TSHIRTS:
      return {
        ...state,
        products: action.payload,
        isReady: true
      };
    case SET_IS_READY:
      return {
        ...state,
        isReady: action.payload
      };
    case SELECTED_SIZE:
      return {
        ...state,
        selectedSize: action.payload
      };
    case SET_FILTER:
      return {
        ...state,
        filterBy: action.payload
      };
    default:
      return state;
  }
}

export const setProducts = (products) => ({ type: SET_MEN_TSHIRTS, payload: products })
export const selectSize = (
  productSize,
  productId,
  productPrice,
  productDescription,
  productMaterial,
  pictureUrl
) => ({ type: SELECTED_SIZE, payload: { productSize, productId, productPrice, productDescription, productMaterial, pictureUrl } })
export const setFilter = (filter) => ({ type: SET_FILTER, payload: filter })


export const requestMenProducts = (type) => {
  return (dispatch) => {
    productsAPI.getMenProducts(type).then(response => {
      dispatch(setProducts(response));
    });
  }
}

export const requestWomenProducts = (type) => {
  return (dispatch) => {
    productsAPI.getWomenProducts(type).then(response => {
      dispatch(setProducts(response));
    });
  }
}

export default productsReducer;