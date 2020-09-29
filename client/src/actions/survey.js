import {
  CREATE_SURVEY,
  SURVEY_ERROR,
  GET_SURVEYS,
  CLEAR_SURVEY,
} from './types';
import { setAlert } from './alert';
import axios from 'axios';

export const createSurvey = (formState, history) => async (dispatch) => {
  try {
    const { data } = await axios.post('/api/survey', formState);
    dispatch({
      type: CREATE_SURVEY,
      payload: data,
    });
    dispatch(setAlert('Survey Created', 'success'));
    history.push('/dashboard');
  } catch (error) {
    const err = error.response.data.errors;
    if (err) {
      err.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: SURVEY_ERROR,
      payload: { msg: error.response.statusText, error: error.response.status },
    });
  }
};

export const getSurveys = () => async (dispatch) => {
  dispatch({ type: CLEAR_SURVEY });
  try {
    const { data } = await axios.get('/api/survey/me');
    dispatch({
      type: GET_SURVEYS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SURVEY_ERROR,
      payload: { msg: error.response.statusText, error: error.response.status },
    });
  }
};
