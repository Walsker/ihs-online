// React Native components
import React, {Component} from 'react';

// React Navigation imports
import {createDrawerNavigator} from 'react-navigation';

// Custom imports
import NavDrawer from 'ihsOnline/src/common/navDrawer/navDrawer';
import DayWhatPage from 'ihsOnline/src/dayWhat/dayWhatPage';

export default class RootNavigator extends Component
{
    render()
    {
        var navConfig = {
            initialRouteName: "Home",
            contentComponent: ({navigation}) =>
            {
                return <NavDrawer navProp = {navigation}/>;
            }
        };

        var routeConfig = {
            "Home": {screen: DayWhatPage},
            // "Settings": {screen: DayWhatPage},
            // "About": {screen: DayWhatPage},
        };

        var DrawerNavigator = createDrawerNavigator(routeConfig, navConfig);
        
        return(
            <DrawerNavigator/>
        );
    }
}