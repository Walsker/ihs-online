import {combineReducers} from 'redux';

import dayWhatReducers from './dayWhat/reducers';

export default combineReducers({...dayWhatReducers});