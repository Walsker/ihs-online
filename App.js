import React, {Component} from 'react';
import {View} from 'react-native';

import AndroidBar from 'ihs-online/src/components/common/androidBar';
import {DayWhatPage} from 'ihs-online/src/components/pages';

export default class App extends Component
{
    render()
    {
        return(
            <View style = {{flex: 1}}>
                <AndroidBar/>
                <DayWhatPage/>
            </View>
        );
    }
}