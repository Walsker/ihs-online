import React, {Component} from 'react';
import {Text, View} from 'react-native';

import {containerStyle, textStyle} from 'ihs-online/src/components/common/appStyles';

export default class DayLetter extends Component
{
    render()
    {
        return(
            <View style = {containerStyle.bigLetter}>
                <Text style = {textStyle.bigLetter}>
                    A
                </Text>
            </View>
        );
    }
}