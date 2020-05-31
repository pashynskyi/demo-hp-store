const SET_MEN_TSHIRTS = 'SET_MEN_TSHIRTS';
const SET_IS_READY = 'SET_IS_READY';
const SELECTED_SIZE = 'SELECTED_SIZE';

let initialState = {
  isReady: false,
  products: null,
  selectedSize: null
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
      debugger;
      return {
        ...state,
        selectedSize: action.payload
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
  productFirm,
  productType,
  productMaterial,
  pictureUrl
) => ({ type: SELECTED_SIZE, payload: { productSize, productId, productPrice, productFirm, productType, productMaterial, pictureUrl } })


export const requestProducts = (page, pageSize) => {
  return async (dispatch) => {
    //   dispatch(toggleIsFetching(true));
    //   dispatch(setCurrentPage(page));

    //   let data = await usersAPI.getUsers(page, pageSize);
    //   dispatch(toggleIsFetching(false));
    //   dispatch(setProducts(data.items));
    //   dispatch(setTotalUsersCount(data.totalCount / 100));
  }
}

export default productsReducer;