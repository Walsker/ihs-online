import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {actionBarStyle, barColor, primaryColor} from './appStyles';

export default class ActionBar extends React.Component
{
    render()
    {
        return(
            <View style = {actionBarStyle.default}>
                {this.props.centerComponent}
            </View>
        );
    }
}

