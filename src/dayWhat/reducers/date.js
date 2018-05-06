import {UPDATE_DATE} from '../actionTypes';

export default (prevState = '1970-01-01', action) =>
{
    switch(action.type)
    {
        case UPDATE_DATE:
            return action.payload;
        default:
            return prevState;
    }
};