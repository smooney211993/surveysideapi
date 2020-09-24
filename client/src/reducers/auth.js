import {
  USER_LOADED,
  AUTH_ERROR,
  LOG_OUT,
  PAYMENT_SUCCESS,
  PAYMENT_FAIL,
} from '../actions/types';

const initialState = {
  user: null,
  isAuthenticated: null,
  loading: true,
  paymentError: {},
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
    case PAYMENT_SUCCESS:
      return {
        ...state,
        user: { ...state.user, credits: payload },
      };
    case PAYMENT_FAIL:
      return { ...state, paymentError: payload };
    default:
      return state;
  }
}
