import React, {Component} from 'react';
import {AsyncStorage, Text, View} from 'react-native';

import {containerStyle, textStyle} from 'ihsOnline/src/common/appStyles';

export default class BigLetter extends Component
{
    render()
    {
        return(
            <View style = {containerStyle.bigLetter}>
                <Text style = {textStyle.bigLetter}>
                    {this.props.type}
                </Text>
            </View>
        );
    }
}