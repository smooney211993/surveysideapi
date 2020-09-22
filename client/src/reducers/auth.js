import { USER_LOADED, AUTH_ERROR, LOG_OUT } from '../actions/types';

const initialState = {
  user: null,
  isAuthenticated: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        user: payload,
        loading: false,
        isAuthenticated: true,
      };
    case AUTH_ERROR:
    case LOG_OUT:
      return {
        ...state,
        user: null,
        loading: false,
        isAuthenticated: null,
      };
    default:
      return state;
  }
}
