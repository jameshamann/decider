import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    backgroundColor: '#eaeff7'
  },
  title: {
    fontSize: 40,
    padding: 25,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Avenir',
    color: 'black',

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    margin: 10,
    fontFamily: 'Avenir',
    fontWeight: 'bold'


  },
  instructions: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 5,
    fontSize: 15,
    padding: 50,
    fontFamily: 'Avenir',
    fontWeight: 'bold'


  },
  button: {
    color: '#4286f4',
    fontFamily: 'Avenir'

  },
  reset: {
    color: '#4286f4',
    fontFamily: 'Avenir',
  },
});

export default styles;
