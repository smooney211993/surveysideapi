import { combineReducers } from 'redux';
import auth from './auth';
import survey from './survey';
export default combineReducers({ auth, survey });
