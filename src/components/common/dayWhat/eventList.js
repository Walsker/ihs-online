import React, {Component} from 'react';
import {Text, View} from 'react-native';

import {containerStyle, textStyle} from 'ihs-online/src/components/common/appStyles';

export default class EventList extends Component
{
    render()
    {
        return(
            <View style = {containerStyle.eventList}>
                <View style = {containerStyle.eventLabel}>
                    <Text style = {textStyle.eventLabel}>
                        Today's Events
                    </Text>
                </View>
                <View style = {{height: 250}}/>
            </View>
        );
    }
}