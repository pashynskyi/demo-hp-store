import { authAPI } from "../../api/api";

const LOGIN_USER = 'LOGIN_USER';

const initialState = {
  currentUser: '',
  isAuth: false
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        currentUser: action.payload,
        isAuth: true
      }
    default:
      return state;
  }
}

export const setUser = (data) => ({ type: LOGIN_USER, payload: data })

export const login = (loginData) => {
  return (dispatch) => {
    authAPI.login(loginData).then(response => {
      dispatch(setUser(response.data))
    });
  }
}


export default loginReducer;