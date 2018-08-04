// React Native imports
import React, {Component} from 'react';
import {Text, View} from 'react-native';

// Custom imports
import {containerStyle, textStyle} from '../appStyles';
import Divider from './divider';
import DrawerItem from './drawerItem';

export default class NavDrawer extends Component
{
    render()
    {
        return(
            <View style = {containerStyle.default}>
                <View style = {containerStyle.drawerHeader}>
                    <Text style = {[textStyle.bold(56), {color: 'white'}]}>IMH Online</Text>
                </View>
                <View style = {containerStyle.default}>
                    <View style = {{marginVertical: 5}}/>
                    <DrawerItem 
                        title = "Home"
                        action = {() => this.props.navProp.navigate("Home")}
                    />
                    <DrawerItem 
                        title = "Calendar"
                        action = {() => alert("Calendar Link")}
                    />
                    <Divider/>
                    <DrawerItem title = "Settings" action = {() => alert("Settings Link")}/>
                    <DrawerItem title = "About" action = {() => alert("About Link")}/>
                </View>
            </View>
        );
    }
}