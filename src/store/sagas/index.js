import { takeEvery, call, put } from 'redux-saga/effects';
import {
  FETCH_IMAGES_REQUEST,
  fetchImagesSuccess,
  fetchImagesFailure,
} from '../actions/index';

const fetchImagesApi = async (afterValue) => {
  const proxyUrl = "https://api.allorigins.win/get?url=";
  const apiUrl = `https://nature-api.alca.dev/search?q=forest${afterValue ? `&after=${afterValue}` : ""}`;
  const response = await fetch(proxyUrl + encodeURIComponent(apiUrl));
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const jsonResponse = await response.json();
  return JSON.parse(jsonResponse.contents);
};

function* fetchImagesSaga(action) {
  try {
    const data = yield call(fetchImagesApi, action.payload);
    yield put(fetchImagesSuccess(data.images, data.after));
  } catch (error) {
    yield put(fetchImagesFailure(error.message));
  }
}

function* rootSaga() {
  yield takeEvery(FETCH_IMAGES_REQUEST, fetchImagesSaga);
}

export default rootSaga;
