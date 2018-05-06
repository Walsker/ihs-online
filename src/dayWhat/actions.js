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
    var today = (new Date()).toISOString().slice(0, 10);
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