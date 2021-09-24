import {
  FETCH_PRODUCT_LIST_REQUEST,
  FETCH_PRODUCT_LIST_SUCCESS,
  FETCH_PRODUCT_LIST_FAILED,
} from '../actions/productList.action';
import {ProductListInterface} from '../types/productList.types';

const initialState: ProductListInterface = {
  productList: [],
  isLoading: false,
};

export const getProductListReducer = (state = initialState, action) => {
  const {payload, type} = action;
  switch (type) {
    case FETCH_PRODUCT_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        productList: payload,
        isLoading: false,
      };
    case FETCH_PRODUCT_LIST_FAILED:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default getProductListReducer;
