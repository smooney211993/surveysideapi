import axios from 'axios';
import { USER_LOADED, AUTH_ERROR } from './types';
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
