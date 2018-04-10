import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';

import {containerStyle} from 'ihs-online/src/components/common/appStyles';
import DailyMessage from 'ihs-online/src/components/common/dayWhat/dailyMessage';
import Date from 'ihs-online/src/components/common/dayWhat/date';
import DayLetter from 'ihs-online/src/components/common/dayWhat/dayLetter';
import EventList from 'ihs-online/src/components/common/dayWhat/eventList';
import HeaderBar from 'ihs-online/src/components/common/headerBar';

export default class DayWhatPage extends Component
{
    render()
    {
        return(
            <View style = {containerStyle.default}>
                <HeaderBar centerComponent = {<Date/>}/>
                <ScrollView>
                    <DailyMessage/>
                    <View style = {containerStyle.page}>
                        <DayLetter/>
                    </View>
                    <EventList/>
                </ScrollView>
            </View>
        );
    }
}