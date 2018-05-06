import React, {Component} from 'react';
import {RefreshControl, ScrollView, Text, View} from 'react-native';

import {connect} from 'react-redux';
import {updateDate, updateDayType} from './actions';

import {containerStyle} from 'ihsOnline/src/common/appStyles';
import EventList from 'ihsOnline/src/common/events/eventList';
import ActionBar from 'ihsOnline/src/common/actionBar';
import {DailyMessage, DateDisplay, DayInfo} from './components';

class DayWhatPage extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {refreshing: false};
    }

    renderDayInfo()
    {
        if (this.props.currentDayType == "Weekend")
        {
            return(
                <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center', height: 500}}>
                    <Text>It's the weekend!</Text>
                </View>
            );
        }
        else
        {
            return(
                <View style = {containerStyle.page}>
                    <DayInfo type = {this.props.currentDayType}/>
                </View>
            );
        }
    }

    update()
    {
        this.props.updateDate();
        this.props.updateDayType(this.props.currentDate);
    }

    refresh()
    {
        this.setState({refreshing: true});
        this.update();
        this.setState({refreshing: false});
    }

    render()
    {
        this.update();
        return(
            <View style = {containerStyle.default}>
                <ActionBar centerComponent = {<DateDisplay date = {this.props.currentDate}/>}/>
                <ScrollView
                    refreshControl = 
                    {
                        <RefreshControl
                            refreshing = {this.state.refreshing}
                            onRefresh = {this.refresh.bind(this)}
                        />
                    }
                >
                    <DailyMessage/>
                    {this.renderDayInfo()}
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
        currentDayType: state.currentDayType,
    };
}
export default connect(mapStateToProps, {updateDate, updateDayType})(DayWhatPage);