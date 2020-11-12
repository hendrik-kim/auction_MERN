import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers';
import {
  postDefaultItemReducer,
  postDetailsReducer,
  postListReducer,
} from './reducers/postReducers';

const reducer = combineReducers({
  postList: postListReducer,
  postDefaultItem: postDefaultItemReducer,
  postDetails: postDetailsReducer,
  productDetails: productDetailsReducer,
  productList: productListReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
