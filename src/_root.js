// React Native imports
import React, {Component} from 'react';
import {AsyncStorage, StatusBar, View} from 'react-native';

// Redux imports
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './_rootReducer';

// Custom imports
import AndroidBar from 'ihsOnline/src/common/androidBar';
import RootNavigator from './_rootNavigator';

export default class App extends Component
{
    render()
    {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return(
            <Provider store = {store}>
                <View style = {{flex: 1}}>
                    <AndroidBar/>
                    <StatusBar
                        translucent
                        animated
                        backgroundColor = "rgba(0, 0, 0, 0.2)"
                    />
                    <RootNavigator/>
                </View>
            </Provider>
        );
    }
}

// This disables the timer warning as a result of using the web sdk of firebase. Keep checking for a fix for this
console.ignoredYellowBox = ["Setting a timer"];