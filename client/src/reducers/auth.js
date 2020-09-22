import { USER_LOADED, AUTH_ERROR } from '../actions/types';

const initialState = {
  user: null,
  isAuthenticated: null,
  loaded: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        user: payload,
        loaded: false,
        isAuthenticated: true,
      };
    case AUTH_ERROR:
      return {
        ...state,
        user: null,
        loaded: false,
        isAuthenticated: null,
      };
    default:
      return state;
  }
}
