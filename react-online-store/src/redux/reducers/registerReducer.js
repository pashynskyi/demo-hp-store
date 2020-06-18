import { registerAPI } from "../../api/api";

const REGISTER_USER = 'REGISTER_USER';

const initialState = {
  isRegistered: false
}

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {isRegistered: true}
    default:
      return state;
  }
}

export const setRegister = () => ({ type: REGISTER_USER })

export const registerUser = (registerData) => {
  return (dispatch) => {
    registerAPI.register(registerData).then(response => {
      dispatch(setRegister(response))
    });
  }
}


export default registerReducer;