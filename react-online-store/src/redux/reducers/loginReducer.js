import { authAPI } from "../../api/api";

const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';

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
      };
    case LOGOUT_USER:
      debugger;
      return {
        ...state,
        currentUser: '',
        isAuth: false
      }
    default:
      return state;
  }
}

export const setUser = (data) => ({ type: LOGIN_USER, payload: data })
export const resetUser = () => ({ type: LOGOUT_USER })

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
      dispatch(setUser(response.data))
    });
  }
}

// export const logout = () => {
//   return (dispatch) => {
//     authAPI.logout().then(response => {
//       dispatch(setUser(response.data))
//     });
//   }
// }


export default loginReducer;