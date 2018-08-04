// React Native imports
import React, {Component} from 'react';
import {View} from 'react-native';

// Custom imports
import {colors} from '../appStyles';

export default class Divider extends Component
{
    render()
    {
        return(
            <View style = {{
                backgroundColor: colors.dividerColor,
                marginVertical: 10,
                height: 1
            }}/>
        );
    }
}