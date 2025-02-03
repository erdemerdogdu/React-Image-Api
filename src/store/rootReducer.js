import { combineReducers } from 'redux';
import galleryReducer from './reducers';

const rootReducer = combineReducers({
  gallery: galleryReducer,
});

export default rootReducer;
