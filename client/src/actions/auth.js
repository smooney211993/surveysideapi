import axios from 'axios';
import { USER_LOADED, AUTH_ERROR, LOG_OUT } from './types';
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
    await axios.get('./api/auth/logout');
    dispatch({
      type: LOG_OUT,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};
