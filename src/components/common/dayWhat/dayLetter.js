import React, {Component} from 'react';
import {AsyncStorage, Text, View} from 'react-native';

import {containerStyle, textStyle} from 'ihsOnline/src/components/common/appStyles';

import * as firebase from 'firebase';
import {firebaseApp} from 'ihsOnline/firebaseConfig';
const firebaseRef = firebaseApp.database().ref();

export default class DayLetter extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            currentDate: (new Date()).toISOString().split(0, 10),
            day: "N/A"
        };
        this.listenForChange(firebaseRef);
    }

    // A method that waits for change on the server
    listenForChange(databaseRef)
    {
        databaseRef.on('value', async dataSnapshot =>
        {
            // In here do something every time data is changed
            var data = dataSnapshot.val();

            try
            {
                for (var key in data)
                {
                    await AsyncStorage.setItem(key.toString() , JSON.stringify(data[key]))
                }

                this.update();
            }
            catch (error)
            {
                alert(error);
                console.log("ERROR");
            }
        });
    }

    async update()
    {
        var dateKey = (new Date()).toISOString().slice(0, 10);
        this.setState(
        {
            currentDate: dateKey,
            day: JSON.parse(await AsyncStorage.getItem(dateKey))["type"]
        });
    }

    render()
    {
        return(
            <View style = {containerStyle.bigLetter}>
                <Text style = {textStyle.bigLetter}>
                    {this.state.day}
                </Text>
            </View>
        );
    }
}