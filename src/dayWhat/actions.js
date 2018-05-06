// React Native imports
import {AsyncStorage} from 'react-native';

// Firebase imports
import {firebaseApp} from 'ihsOnline/firebaseConfig';
const firebaseRef = firebaseApp.database().ref();
const connectionRef = firebaseApp.database().ref('.info/connected');

import 
{
    UPDATE_DATE,
    DATABASE_RETRIEVED,
    DATABASE_ERROR,
    CONNECTION_CHANGED
} from './actionTypes';

export const updateDate = (newDate) =>
{
    return {
        type: UPDATE_DATE,
        payload: newDate
    };
};

export const fetchDatabase = () =>
{
    console.log("fetching data");
    return (dispatch) =>
    {
        connectionRef.off('value');
        connectionRef.on('value', async status =>
        {
            console.log("Connection changed:", status.val());
            if (status.val())
            {
                connectionRef.off('value'); 
                firebaseRef.once('value', async dataSnapshot => 
                {
                    try
                    {
                        console.log("data received");
                        
                        await AsyncStorage.setItem("database", JSON.stringify(dataSnapshot.val()));
                        dispatch(
                        {
                            type: DATABASE_RETRIEVED,
                            payload: dataSnapshot.val()
                        });
                    }
                    catch (error)
                    {
                        console.log("Error in online retrieval,", error);
                        dispatch({type: DATABASE_ERROR});
                    }
                });
            }
            else
            {
                try
                {
                    var oldData = JSON.parse(await AsyncStorage.getItem("database"));

                    if (oldData == null)
                    {
                        dispatch({type: DATABASE_ERROR});
                    }
                    else
                    {
                        dispatch(
                        {
                            type: DATABASE_RETRIEVED,
                            payload: oldData
                        });
                    }                    
                }
                catch (error)
                {
                    console.log("Error in offline retrieval,", error);
                    dispatch({type: DATABASE_ERROR});
                }
            }
        }); 
    };
};