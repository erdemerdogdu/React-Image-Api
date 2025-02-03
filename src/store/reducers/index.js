import {
    FETCH_IMAGES_REQUEST,
    FETCH_IMAGES_SUCCESS,
    FETCH_IMAGES_FAILURE,
  } from '../actions/index';
  
  const initialState = {
    images: [],
    after: null,
    loading: false,
    error: null,
  };
  
  const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_IMAGES_REQUEST:
        return { ...state, loading: true };
      case FETCH_IMAGES_SUCCESS:
        return {
          ...state,
          loading: false,
          images: [...state.images, ...action.payload.images],
          after: action.payload.after,
        };
      case FETCH_IMAGES_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default galleryReducer;
  