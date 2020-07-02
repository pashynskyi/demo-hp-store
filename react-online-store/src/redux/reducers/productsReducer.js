import { productsAPI, adminAPI } from "../../api/api";

const SET_PRODUCTS = 'SET_PRODUCTS';
const RESET_IS_READY = 'SET_IS_READY';
const SET_CURRENT_PRODUCT = 'SET_CURRENT_PRODUCT';
const SET_SORT = 'SET_SORT';
const SET_SIZE = 'SET_SIZE';
const RESET_SIZE = 'RESET_SIZE';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const RESET_CURRENT_PAGE = 'RESET_CURRENT_PAGE';
const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES';

let initialState = {
  isReady: false,
  products: null,
  currentProduct: '',
  sortBy: '',
  productSize: '',
  pageSize: 12,
  totalPages: 0,
  currentPage: 1
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
      debugger;
      return {
        ...state,
        isReady: false
      };
    case SET_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: action.payload,
      };
    case SET_SORT:
      return {
        ...state,
        sortBy: action.payload
      };
    case SET_SIZE:
      return {
        ...state,
        productSize: action.payload
      };
    case RESET_SIZE:
      return {
        ...state,
        productSize: ''
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      };
      case RESET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: 1
      };
    case SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.payload
      };
    default:
      return state;
  }
}

export const setProducts = (products) => ({ type: SET_PRODUCTS, payload: products })
export const resetIsReady = () => ({ type: RESET_IS_READY })
export const setCurrentProduct = (product) => ({ type: SET_CURRENT_PRODUCT, payload: product })
export const setSort = (sort) => ({ type: SET_SORT, payload: sort })
export const setSize = (size) => ({ type: SET_SIZE, payload: size })
export const resetSize = () => ({ type: RESET_SIZE })
export const setCurrentPage = (pageNumber) => ({ type: SET_CURRENT_PAGE, payload: pageNumber })
export const resetCurrentPage = () => ({ type: RESET_CURRENT_PAGE })
export const setTotalPages = (totalPagesCount) => ({ type: SET_TOTAL_PAGES, payload: totalPagesCount })



export const requestProducts = (categoryType, productType, currentPage, pageSize, sortBy) => {
  return (dispatch) => {
    productsAPI.getProducts(categoryType, productType, currentPage, pageSize, sortBy).then(response => {
      dispatch(setProducts(response.content));
      dispatch(setTotalPages(response.totalPages));
    });
  }
}

export const createNewProduct = (product, token) => {
  return (dispatch) => {
    adminAPI.postProduct(product, token).then(response => {
      dispatch(resetIsReady());
    })
  }
}

export const editCurrentProduct = (product, token) => {
  return (dispatch) => {
    adminAPI.putProduct(product, token).then(response => {
      dispatch(resetIsReady());
    })
  }
}

export const deleteCurrentProduct = (productId, token) => {
  return (dispatch) => {
    adminAPI.deleteProduct(productId, token).then(response => {
      dispatch(resetIsReady());
    })
  }
}


export default productsReducer;