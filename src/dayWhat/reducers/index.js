import {combineReducers} from 'redux';

import date from './date';
import database from './database';

export default
{
    currentDate: date,
    database
};