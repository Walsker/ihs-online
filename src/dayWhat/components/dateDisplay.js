// React Native imports
import React, {Component} from 'react';
import {Text} from 'react-native';

// Custom imports
import {textStyle} from 'ihsOnline/src/common/appStyles';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export default class DateDisplay extends Component
{
    format(dateString)
    {
        var day = parseInt(dateString.slice(8, 10));
        var month = months[parseInt(dateString.slice(5, 7)) - 1];
        var year = dateString.slice(0, 4);
        return month + ' ' + day + ', ' + year
    }
    render()
    {
        return(
            <Text style = {textStyle.actionBarTitle}>
                {this.format(this.props.date)}
            </Text>
        );
    }
}