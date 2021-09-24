import {ProductInterface} from '../types/productList.types';

export const FETCH_PRODUCT_LIST_REQUEST = 'FETCH_PRODUCT_LIST_REQUEST';
export const FETCH_PRODUCT_LIST_SUCCESS = 'FETCH_PRODUCT_LIST_SUCCESS';
export const FETCH_PRODUCT_LIST_FAILED = 'FETCH_PRODUCT_LIST_FAILED';

export const fetchProductListRequest = () => {
  return {
    type: FETCH_PRODUCT_LIST_REQUEST,
  };
};

export const fetchProductListSuccess = (payload: ProductInterface[]) => {
  return {
    type: FETCH_PRODUCT_LIST_SUCCESS,
    payload,
  };
};

export const fetchProductListFailed = () => {
  return {
    type: FETCH_PRODUCT_LIST_FAILED,
  };
};

export const fetchProductList = () => dispatch => {
  try {
    dispatch(fetchProductListRequest());
    fetch(
      'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline',
    )
      .then(res => res.json())
      .then(resJson => dispatch(fetchProductListSuccess(resJson)))
      .catch(e => {
        console.error('fetchProductListFailed: ', e);
        dispatch(fetchProductListFailed());
      });
  } catch (e) {
    dispatch(fetchProductListFailed());
  }
};
