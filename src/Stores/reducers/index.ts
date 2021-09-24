import {combineReducers} from 'redux';
import getProductListReducer from './productList.reducer';

export const rootReducer = combineReducers({
  getProductListReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
