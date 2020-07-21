import { newsAPI } from '../../api/api';

const SET_NEWS = 'SET_NEWS';
const SET_SELECTED_NEWS = 'SET_SELECTED_NEWS';

const initialState = {
  news: null,
  isNewsReady: false,
  selectedNews: null,
  isSelectedNewsReady: false
}

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS:
      return {
        ...state,
        news: action.payload,
        isNewsReady: true
      };
    case SET_SELECTED_NEWS:
      return {
        ...state,
        selectedNews: action.payload,
        isSelectedNewsReady: true
      };
    default:
      return state;
  }
}

export const setNews = (data) => ({ type: SET_NEWS, payload: data })
export const setSelectedNews = (data) => ({ type: SET_SELECTED_NEWS, payload: data })

export const requestNews = () => (dispatch) => {
  newsAPI.getNews().then(response => {
    dispatch(setNews(response.content))
  });
}

export const requestSelectedNews = (newsId) => (dispatch) => {
  newsAPI.getSelectedNews(newsId).then(response => {
    dispatch(setSelectedNews(response))
  });
}

export default newsReducer;