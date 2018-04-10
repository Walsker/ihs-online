import React, {Component} from 'react';
import {Text, View} from 'react-native';

import {pageStyle, primaryColor} from 'ihs-online/src/components/common/appStyles';
import HeaderBar from 'ihs-online/src/components/common/headerBar';
import Date from 'ihs-online/src/components/common/date';

export default class DayWhatPage extends Component
{
    render()
    {
        return(
            <View style = {pageStyle.container}>
                <HeaderBar centerComponent = {<Date/>}/>
                <View style = {pageStyle.default}>
                    <Text>This is the Day What page.</Text>
                </View>
            </View>
        );
    }
}