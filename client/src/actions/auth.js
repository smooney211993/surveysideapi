import axios from 'axios';
import {
  USER_LOADED,
  AUTH_ERROR,
  LOG_OUT,
  PAYMENT_SUCCESS,
  PAYMENT_FAIL,
} from './types';
import { setAlert } from './alert';
export const loadUser = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/auth/me');

    dispatch({
      type: USER_LOADED,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const logOut = () => async (dispatch) => {
  try {
    await axios.get('/api/auth/logout');
    dispatch({
      type: LOG_OUT,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const addCredits = (paymentToken) => async (dispatch) => {
  try {
    const { data } = await axios.post('/api/billing/stripe', paymentToken);
    dispatch({
      type: PAYMENT_SUCCESS,
      payload: data,
    });
    dispatch(setAlert('Sucessfully Added Credits', 'success'));
  } catch (error) {
    dispatch({
      type: PAYMENT_FAIL,
      payload: { msg: error.response.status, err: error.response.status },
    });
  }
};
