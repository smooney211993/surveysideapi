import { CREATE_SURVEY, SURVEY_ERROR, GET_SURVEYS } from './types';
import axios from 'axios';

export const createSurvey = (formState) => async (dispatch) => {
  try {
    const { data } = await axios.post('/api/survey', formState);
    dispatch({
      type: CREATE_SURVEY,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SURVEY_ERROR,
      payload: { msg: error.response.statusText, error: error.response.status },
    });
  }
};

export const getSurveys = () => async (dispatch) => {
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
