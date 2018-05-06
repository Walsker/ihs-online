// React (native) imports
import React, {Component} from 'react';
import {AsyncStorage, StatusBar, View} from 'react-native';

// Redux imports
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './_rootReducer';
import * as actions from './dayWhat/actions';

// Custom imports
import AndroidBar from 'ihsOnline/src/common/androidBar';
import {DayWhatPage} from 'ihsOnline/src/dayWhat';

export default class App extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        store.dispatch(actions.fetchDatabase());

        var today = (new Date()).toISOString().slice(0, 10);
        store.dispatch(actions.updateDate(today));
        return(
            <Provider store = {store}>
                <View style = {{flex: 1}}>
                    <AndroidBar/>
                    <StatusBar
                        translucent
                        animated
                        backgroundColor = "rgba(0, 0, 0, 0.2)"/>
                    <DayWhatPage/>
                </View>
            </Provider>
        );
    }
}

// This disables the timer warning as a result of using the web sdk of firebase. Keep checking for a fix for this
console.ignoredYellowBox = ["Setting a timer"];