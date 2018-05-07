// React Native imports
import {AsyncStorage} from 'react-native';

// Firebase imports
import {firebaseApp} from 'ihsOnline/firebaseConfig';
const firebaseRef = firebaseApp.database().ref();
const connectionRef = firebaseApp.database().ref('.info/connected');

import 
{
    UPDATE_DATE,
    UPDATE_DAY_TYPE
} from './actionTypes';

export const updateDate = () =>
{
    // Calculating the current date based on the timezeon since
    // .toISOString() returns a time in UTC (GMT)
    const MS_PER_MINUTE = 60000;
    var day = new Date();
    var offset = day.getTimezoneOffset(); // Retrieves timezone difference in minutes
    var correctedDate = new Date(day.valueOf() - (offset * MS_PER_MINUTE));
    var today = correctedDate.toISOString().slice(0, 10);

    return {
        type: UPDATE_DATE,
        payload: today
    };
};

export const updateDayType = (date) =>
{
    const dayRef = firebaseApp.database().ref(date);
    return (dispatch) =>
    {
        connectionRef.off('value');
        connectionRef.on('value', async status =>
        {
            if (status.val())
            {
                connectionRef.off('value');
                dayRef.once('value', async dataSnapshot => 
                {                    
                    dispatch(
                    {
                        type: UPDATE_DAY_TYPE,
                        payload: dataSnapshot.val().type
                    });
                });
            }
        });
    }
}