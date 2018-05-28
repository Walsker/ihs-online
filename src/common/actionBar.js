import React, {Component} from 'react';
import {View} from 'react-native';
import {actionBarStyle} from './appStyles';

export default class ActionBar extends Component
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

