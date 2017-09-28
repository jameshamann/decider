import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import styles from '../styles';

import cuisine from '../cuisine.js'



class HomeScreen extends Component {

  constructor(props) {
   super(props);
   this.state = { choice: '' };

 }
  randomCuisine() {
    var rand = cuisine[Math.floor(Math.random() * cuisine.length)];
    this.setState({
      choice: rand
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Decidr
        </Text>
        <Text style={styles.instructions}>
          Cant decide on what to eat? Click the button below.
        </Text>
        <Button style={styles.button}
         onPress={this.randomCuisine.bind(this)}
         title="What will you eat today?"
        />
        <Text style={styles.welcome}>
          {this.state.choice}
        </Text>
      </View>
    );
  }

}

export default HomeScreen;
