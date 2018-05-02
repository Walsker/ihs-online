import React, {Component} from 'react';
import {Text} from 'react-native';

import {textStyle} from 'ihsOnline/src/components/common/appStyles';
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default class DateDisplay extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            currentDate: (new Date())
        }
    }

    render()
    {
        return(
            <Text style = {textStyle.dateDisplay}>
                {months[this.state.currentDate.getMonth()]} {this.state.currentDate.getDate()}, {this.state.currentDate.getFullYear()}
            </Text>
        );
    }
}