import { productsAPI, adminAPI } from "../../api/api";

const SET_PRODUCTS = 'SET_PRODUCTS';
const RESET_IS_READY = 'SET_IS_READY';
const SET_CURRENT_PRODUCT = 'SET_CURRENT_PRODUCT';
const SET_FILTER = 'SET_FILTER';
const SET_SIZE = 'SET_SIZE';

let initialState = {
  isReady: false,
  products: null,
  currentProduct: '',
  filterBy: 'all',
  productSize: 'S'
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        isReady: true
      };
    case RESET_IS_READY:
      return {
        ...state,
        isReady: false
      };
      case SET_CURRENT_PRODUCT:
        return {
          ...state,
          currentProduct: action.payload,
        };
    case SET_FILTER:
      return {
        ...state,
        filterBy: action.payload
      };
      case SET_SIZE:
        return {
          ...state,
          productSize: action.payload
        };
    default:
      return state;
  }
}

export const setProducts = (products) => ({ type: SET_PRODUCTS, payload: products })
export const setCurrentProduct = (product) => ({type: SET_CURRENT_PRODUCT, payload: product})
export const setFilter = (filter) => ({ type: SET_FILTER, payload: filter })
export const setSize = (size) => ({type: SET_SIZE, payload: size})
export const resetIsReady = () => ({type: RESET_IS_READY})


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

export const editCurrentProduct = (product, token) => {
  return (dispatch) => {
    adminAPI.editProduct(product, token).then(response => {
      dispatch(setProducts(response));
      dispatch(resetIsReady());
    })
  }
}

export default productsReducer;