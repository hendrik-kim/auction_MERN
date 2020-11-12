import {
  POST_DEFAULT_ITEM_REQUEST,
  POST_DEFAULT_ITEM_FAIL,
  POST_DEFAULT_ITEM_SUCCESS,
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  POST_LIST_FAIL,
  POST_DETAILS_REQUEST,
  POST_DETAILS_SUCCESS,
  POST_DETAILS_FAIL,
} from '../constants/postConstants';

export const postListReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case POST_LIST_REQUEST:
      return { loading: true, posts: [] };
    case POST_LIST_SUCCESS:
      return { loading: false, posts: action.payload };
    case POST_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const postDetailsReducer = (
  state = { post: { postItems: [] } },
  action
) => {
  switch (action.type) {
    case POST_DETAILS_REQUEST:
      return { loading: true, ...state };
    case POST_DETAILS_SUCCESS:
      return { loading: false, post: action.payload };
    case POST_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const postDefaultItemReducer = (state = { defaultItem: {} }, action) => {
  switch (action.type) {
    case POST_DEFAULT_ITEM_REQUEST:
      return { loading: true, ...state };
    case POST_DEFAULT_ITEM_SUCCESS:
      return { loading: false, defaultItem: action.payload };
    case POST_DEFAULT_ITEM_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
