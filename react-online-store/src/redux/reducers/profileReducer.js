import { profileAPI } from '../../api/api';

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const CLEAR_USER_PROFILE = 'CLEAR_USER_PROFILE';
const SET_ORDERS = 'SET_ORDERS';
const SET_ORDER_DETAILS = 'SET_ORDER_DETAILS';


const initialState = {
  userProfile: '',
  orders: '',
  orderDetails: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload
      };
    case CLEAR_USER_PROFILE:
      return {
        ...state,
        userProfile: '',
        orders: '',
        orderDetails: ''
      };
    case SET_ORDERS:
      return {
        ...state,
        orders: action.payload
      };
    case SET_ORDER_DETAILS:
      return {
        ...state,
        orderDetails: action.payload
      }
    default:
      return state;
  }
}

export const setUserProfile = (data) => ({ type: SET_USER_PROFILE, payload: data })
export const clearUserProfile = () => ({ type: CLEAR_USER_PROFILE })
export const setOrders = (data) => ({ type: SET_ORDERS, payload: data })
export const setOrderDetails = (products) => ({ type: SET_ORDER_DETAILS, payload: products })

export const requestProfile = (email, token) => {
  return (dispatch) => {
    profileAPI.getProfile(email, token).then(response => {
      dispatch(setUserProfile(response))
    });
  }
}

export const editProfile = (profileEditData, token) => {
  debugger;
  return (dispatch) => {
    profileAPI.editProfile(profileEditData, token).then(response => {
      dispatch(setUserProfile(response))
    });
  }
}

export const requestOrders = (token) => {
  return (dispatch) => {
    profileAPI.getOrders(token).then(response => {
      dispatch(setOrders(response))
    });
  }
}

export default profileReducer;