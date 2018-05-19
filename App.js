import React from 'react';
import { StyleSheet, Text, Button,  TouchableHighlight, View, ImageBackground } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './src/Home';
import loginScreen from './src/login';
import CustemerScreen from './src/Custemer';
import inputScreen from './src/input';



const RootStack = StackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
    },
    loginScreen: {
      screen: loginScreen,
    },
    CustemerScreen: {
      screen: CustemerScreen,
    },
    inputScreen: {
      screen: inputScreen,
    },
  },
  {
    initialRouteName: 'loginScreen',
  }
);
export default class App extends React.Component {
  render() {
    return (
    <RootStack />

    );
  }
}
