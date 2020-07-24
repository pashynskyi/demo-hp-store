import { newsAPI, adminAPI } from '../../api/api';

const SET_NEWS = 'SET_NEWS';
const SET_SELECTED_NEWS = 'SET_SELECTED_NEWS';
const RESET_IS_NEWS_READY = 'RESET_IS_NEWS_READY';

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
    case RESET_IS_NEWS_READY:
      return {
        ...state,
        isNewsReady: false,
        isSelectedNewsReady: false
      };
    default:
      return state;
  }
}

export const setNews = (data) => ({ type: SET_NEWS, payload: data })
export const setSelectedNews = (data) => ({ type: SET_SELECTED_NEWS, payload: data })
export const resetIsNewsReady = () => ({ type: RESET_IS_NEWS_READY })

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

export const createNewNews = (news, token) => {
  return (dispatch) => {
    adminAPI.postNews(news, token).then(response => {
      dispatch(resetIsNewsReady());
    })
  }
}

export const editSelectedNews = (news, token) => {
  return (dispatch) => {
    adminAPI.putNews(news, token).then(response => {
      dispatch(resetIsNewsReady());
    })
  }
}

export const deleteSelectedNews = (newsId, token) => {
  return (dispatch) => {
    adminAPI.deleteNews(newsId, token).then(response => {
      dispatch(resetIsNewsReady());
    })
  }
}

export default newsReducer;