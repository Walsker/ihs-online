import {combineReducers} from 'redux';

import date from './date';
import dayType from './dayType';

export default
{
    currentDate: date,
    currentDayType: dayType
};