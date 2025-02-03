export const FETCH_IMAGES_REQUEST = 'FETCH_IMAGES_REQUEST';
export const FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS';
export const FETCH_IMAGES_FAILURE = 'FETCH_IMAGES_FAILURE';

export const fetchImagesRequest = (afterValue) => ({
  type: FETCH_IMAGES_REQUEST,
  payload: afterValue,
});

export const fetchImagesSuccess = (images, after) => ({
  type: FETCH_IMAGES_SUCCESS,
  payload: { images, after },
});

export const fetchImagesFailure = (error) => ({
  type: FETCH_IMAGES_FAILURE,
  payload: error,
});
