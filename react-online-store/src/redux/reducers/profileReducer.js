import { profileAPI } from "../../api/api";

const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
  userProfile: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return { ...state, userProfile: action.payload }
    default:
      return state;
  }
}

export const setUserProfile = (data) => ({ type: SET_USER_PROFILE, payload: data })

export const requestProfile = (email, token) => {
  return (dispatch) => {
    profileAPI.getProfile(email, token).then(response => {
      dispatch(setUserProfile(response))
    });
  }
}

export default profileReducer;