import {UPDATE_DATE} from './actionTypes';

export const updateDate = (newDate) =>
{
    return {
        type: UPDATE_DATE,
        payload: newDate
    };
};