import { CREATE_SURVEY, SURVEY_ERROR } from '../actions/types';
const initialState = {
  survey: null,
  surveys: [],
  loading: true,
  error: null,
};

export default function (state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case CREATE_SURVEY:
      return {
        ...state,
        surveys: [payload, ...state.surveys],
        loading: false,
      };
    case SURVEY_ERROR:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
}
