import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';

import {connect} from 'react-redux';
import {updateDate} from './actions';

import {containerStyle} from 'ihsOnline/src/common/appStyles';
import EventList from 'ihsOnline/src/common/events/eventList';
import ActionBar from 'ihsOnline/src/common/actionBar';
import {DailyMessage, DateDisplay, DayLetter} from './components';

class DayWhatPage extends Component
{
    render()
    {
        var type = '?';
        console.log(this.props.database);
        if (this.props.database[this.props.currentDate])
        {
            type = this.props.database[this.props.currentDate].type;
        }

        return(
            <View style = {containerStyle.default}>
                <ActionBar centerComponent = {<DateDisplay date = {this.props.currentDate}/>}/>
                <ScrollView>
                    <DailyMessage/>
                    <View style = {containerStyle.page}>
                        <DayLetter type = {type}/>
                    </View>
                    <EventList/>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state, ownProps) =>
{
    return {
        currentDate: state.currentDate,
        database: state.database
    };
}
export default connect(mapStateToProps, {updateDate})(DayWhatPage);