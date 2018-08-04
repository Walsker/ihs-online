// React Native imports
import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

// Custom imports
import {colors} from '../appStyles';

export default class DrawerItem extends Component
{
    render()
    {
        return(
            <View
                style = {{
                    paddingBottom: 1,
                    backgroundColor: colors.spaceColor
                }}
            >
                <TouchableOpacity onPress = {this.props.action}>
                    <Text
                        style = {{
                            paddingLeft: 35,
                            paddingVertical: 15,
                            fontFamily: 'LemonMilk',
                            fontSize: 18
                        }}
                    >
                    {this.props.title}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}