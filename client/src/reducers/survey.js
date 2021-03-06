import {
  CREATE_SURVEY,
  SURVEY_ERROR,
  GET_SURVEYS,
  CLEAR_SURVEY,
} from '../actions/types';
const initialState = {
  survey: null,
  surveys: [],
  loading: true,
  error: null,
};

export default function (state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case CLEAR_SURVEY:
      return {
        ...state,
        survey: null,
        loading: false,
        error: null,
      };
    case CREATE_SURVEY:
      return {
        ...state,
        surveys: [payload, ...state.surveys],
        loading: false,
        error: null,
      };
    case GET_SURVEYS:
      return {
        ...state,
        surveys: payload,
        loading: false,
        error: null,
      };
    case SURVEY_ERROR:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
}
