import React, {Component} from 'react';
import {View, StatusBar, Platform} from 'react-native';
import {colors} from './appStyles';

export default class AndroidBar extends Component
{
    render()
    {
        return(   
            <View style = {{backgroundColor: colors.primaryColor, height: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}}/>
        );
    }
}