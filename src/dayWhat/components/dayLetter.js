import React, {Component} from 'react';
import {AsyncStorage, Text, View} from 'react-native';

import {connect} from 'react-redux';

import {containerStyle, textStyle} from 'ihsOnline/src/common/appStyles';

import {firebaseApp} from 'ihsOnline/firebaseConfig';
const firebaseRef = firebaseApp.database().ref();

export default class DayLetter extends Component
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