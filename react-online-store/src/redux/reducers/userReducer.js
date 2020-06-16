const LOGIN_USER = 'LOGIN_USER';

const initialState = {
  currentUser: ''
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, currentUser: action.payload }
    default:
      return state;
  }
}

export const setUser = (data) => ({ type: LOGIN_USER, payload: data })

export default userReducer;