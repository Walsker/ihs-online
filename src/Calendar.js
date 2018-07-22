/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Calendar extends Component<Props> {

   
  render() {
    
    var month = Date.month;
    var year = Date.year;
    var days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,27,28,29,30];
    return (
      <View style={styles.container}>
        <h3>{}</h3>
        <table>
            <tr>
                <th>S</th> <th>M</th> <th>T</th> <th>W</th> <th>T</th> <th>F</th> <th>S</th>
            </tr>
            <tr>
                <td>{days[0]}</td><td>{days[1]}</td>
                <td>{days[2]}</td><td>{days[3]}</td>
                <td>{days[4]}</td><td>{days[5]}</td>
                <td>{days[6]}</td>
            </tr>
            <tr>
                <td>{days[7]}</td><td>{days[8]}</td>
                <td>{days[9]}</td><td>{days[10]}</td>
                <td>{days[11]}</td><td>{days[12]}</td>
                <td>{days[13]}</td>
            </tr>
            <tr>
                <td>{days[14]}</td><td>{days[15]}</td>
                <td>{days[16]}</td><td>{days[17]}</td>
                <td>{days[18]}</td><td>{days[19]}</td>
                <td>{days[20]}</td>
            </tr>
            <tr>
                <td>{days[21]}</td><td>{days[22]}</td>
                <td>{days[23]}</td><td>{days[24]}</td>
                <td>{days[25]}</td><td>{days[26]}</td>
                <td>{days[27]}</td>
            </tr>
            <tr>
                <td>{days[28]}</td><td>{days[29]}</td>
                <td>{days[30]}</td><td>{days[31]}</td>
                <td>{days[32]}</td><td>{days[33]}</td>
                <td>{days[34]}</td>
            </tr>
            <tr>
                <td>{days[35]}</td><td>{days[36]}</td>
                <td>{days[37]}</td><td>{days[38]}</td>
                <td>{days[39]}</td><td>{days[40]}</td>
                <td>{days[41]}</td>
            </tr>
        </table>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
