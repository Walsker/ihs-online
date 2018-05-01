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