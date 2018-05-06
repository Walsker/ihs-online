import {UPDATE_DAY_TYPE} from '../actionTypes';

export default (prevState = '?', action) =>
{
    switch(action.type)
    {
        case UPDATE_DAY_TYPE: 
            return action.payload;
        default:
            return prevState;
    }
};