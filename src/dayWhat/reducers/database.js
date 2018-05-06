import {DATABASE_RETRIEVED, DATABASE_ERROR} from '../actionTypes';

const initialState = 
{
    "1970-01-01":
    {
        type: "?"
    }
}

export default (prevState = initialState, action) =>
{
    switch(action.type)
    {
        case DATABASE_RETRIEVED:
            return action.payload;
        case DATABASE_ERROR:
            return initialState;
        default:
            return prevState;
    }
};