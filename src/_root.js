import React, {Component} from 'react';
import {StatusBar, View} from 'react-native';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './_rootReducer';

import AndroidBar from 'ihsOnline/src/common/androidBar';
import {DayWhatPage} from 'ihsOnline/src/dayWhat';

export default class App extends Component
{
    render()
    {
        return(
            <Provider store = {createStore(reducers)}>
                <View style = {{flex: 1}}>
                    <AndroidBar/>
                    <StatusBar
                        translucent
                        animated
                        backgroundColor = "rgba(0, 0, 0, 0.2)"/>
                    <DayWhatPage/>
                </View>
            </Provider>
        );
    }
}

// This disables the timer warning as a result of using the web sdk of firebase. Keep checking for a fix for this
console.ignoredYellowBox = ["Setting a timer"];