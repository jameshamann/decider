import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';

import styles from '../styles';

import cuisine from '../cuisine.js'



class HomeScreen extends Component {

  constructor(props) {
   super(props);
   this.state = { choice: '',
                  buttonRender: false,
                  text: '',
                };

 }

  randomCuisine() {
    var rand = cuisine[Math.floor(Math.random() * cuisine.length)];
    this.setState({
      choice: rand,
      buttonRender: true,
      text: 'You only get one shot, enjoy your ' + rand + ' meal! 😋🍴',

    })
  }

  resetValues() {
    this.setState({
      choice: '',
      buttonRender: false,
      text: '',
    })
  }

  render() {
    const buttonRender = this.state.buttonRender;
    let button = null;
    if (buttonRender) {
        button = <Button style={styles.reset}
             onPress={this.resetValues.bind(this)}
             title="Do you really want to try again?"
            />;
    } else {
        button =  <Button style={styles.button}
        onPress={this.randomCuisine.bind(this)}
        title="What will you eat today?"
      />;
    }
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Decidr
        </Text>
        <Text style={styles.instructions}>
        </Text>
          {button}
        <Text style={styles.welcome}>
          {this.state.choice}
        </Text>
        <Text style={styles.instructions}>
          {this.state.text}
        </Text>
      </View>
    );
  }

}

export default HomeScreen;
