/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import styles from './styles'

import HomeScreen from './screens/home'

export default class decider extends Component {
  render() {
    return (
      <HomeScreen />
    );
  }
}



AppRegistry.registerComponent('decider', () => decider);
