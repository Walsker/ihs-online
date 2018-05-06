import React, {Component} from 'react';
import {Text, View} from 'react-native';

import {containerStyle, textStyle} from 'ihsOnline/src/common/appStyles';

export default class DailyMessage extends Component
{
    render()
    {
        return(
            <View style = {containerStyle.quote}>
                <Text style = {textStyle.quote}>
                    "A motivational quote."
                </Text>
                <Text style = {textStyle.quoteSource}>
                    Wal Wal
                </Text>
            </View>
        );
    }
}