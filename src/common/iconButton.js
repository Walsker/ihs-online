// React Native imports
import React, {Component} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class IconButton extends Component
{
    render()
    {
        return(
            <TouchableOpacity 
                onPress = {() => this.props.action()}
            >
                <View style = {{
                    margin: 12
                }}>
                    <Icon
                        name = {this.props.type}
                        size = {this.props.size}
                        color = {this.props.color}
                    />
                </View>
            </TouchableOpacity>
        );
    }
}