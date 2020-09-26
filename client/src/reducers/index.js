import { combineReducers } from 'redux';
import auth from './auth';
import survey from './survey';
import alert from './alert';
export default combineReducers({ auth, survey, alert });
