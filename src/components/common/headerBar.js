import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {barColor, primaryColor} from './appStyles';

export default class HeaderBar extends React.Component
{
    render()
    {
        return(
            <Header
                backgroundColor = {barColor}
                leftComponent = 
                {
                    <TouchableOpacity onPress = {this.props.drawerLink}>
                        <Icon
                            name = 'menu'
                            size = {30}
                            color = {primaryColor}
                        />
                    </TouchableOpacity>
                }
                centerComponent = {this.props.centerComponent}
                rightComponent = {this.props.rightComponent}
            />
        );
    }
}

