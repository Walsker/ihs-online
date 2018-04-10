import React, {Component} from 'react';
import {View, StatusBar, Platform} from 'react-native';
import {barColor} from './appStyles';

export default class AndroidBar extends Component
{
    render()
    {
        return(   
            <View style = {{backgroundColor: barColor, height: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}}/>
        );
    }
}