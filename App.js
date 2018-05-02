import React, {Component} from 'react';
import {StatusBar, View} from 'react-native';

import AndroidBar from 'ihsOnline/src/components/common/androidBar';
import {DayWhatPage} from 'ihsOnline/src/components/pages';

export default class App extends Component
{
    render()
    {
        return(
            <View style = {{flex: 1}}>
                <AndroidBar/>
                <StatusBar
                    translucent
                    animated
                    backgroundColor = "rgba(0, 0, 0, 0.2)"/>
                <DayWhatPage/>
            </View>
        );
    }
}

// This disables the timer warning as a result of using the web sdk of firebase. Keep checking for a fix for this
//console.ignoredYellowBox = ["Setting a timer"];