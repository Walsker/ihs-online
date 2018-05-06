import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';

import {connect} from 'react-redux';
import * as actions from './actions';

import {containerStyle} from 'ihsOnline/src/common/appStyles';
import EventList from 'ihsOnline/src/common/events/eventList';
import ActionBar from 'ihsOnline/src/common/actionBar';
import {DailyMessage, DateDisplay, DayLetter} from './components';

class DayWhatPage extends Component
{
    constructor(props)
    {
        super(props);

        // Updating the current date
        var today = (new Date()).toISOString().slice(0, 10);
        this.props.updateDate(today);
        
    }
    render()
    {
        return(
            <View style = {containerStyle.default}>
                <ActionBar centerComponent = {<DateDisplay date = {this.props.currentDate}/>}/>
                <ScrollView>
                    <DailyMessage/>
                    <View style = {containerStyle.page}>
                        <DayLetter/>
                    </View>
                    <EventList/>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state, ownProps) =>
{
    return {currentDate: state.currentDate};
}
export default connect(mapStateToProps, actions)(DayWhatPage);