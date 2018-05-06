import {combineReducers} from 'redux';

import connection from './connection';
import date from './date';
import dayType from './dayType';

export default
{
    currentDate: date,
    currentDayType: dayType,
    isOnline: connection
};