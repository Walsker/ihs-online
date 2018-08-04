import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {actionBarStyle, colors, textStyle} from './appStyles';

export default class ActionBar extends Component
{
    render()
    {
        return(
            <View style = {styles.bar}>
                <View>
                    {this.props.leftButton}
                </View>
                <View style = {styles.title}>
                    {this.props.centerComponent}
                </View>
                <View>
                    {this.props.rightButton}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        bar:
        {
            alignItems: 'flex-start',
            flexDirection: 'row',
            backgroundColor: colors.primaryColor,
            elevation: 3,
            height: 56
        },
        title:
        {
            flex: 1,
            marginHorizontal: 12,
            marginTop: 14,
            marginBottom: 10,
            justifyContent: 'center'
        }
    });