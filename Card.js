import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';

export default class Card extends Component {
  render() {
    return (
      <View>
        <View style={styles.panel}>
          <View style={styles.greetingBox}>
            <Text style={styles.greeting}>
              Olá
            </Text>
            <Text style={styles.greeting}>
              {':)'}
            </Text>
          </View>
          </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
    textAlign: 'center'
  },
  button: {
    alignItems: 'center',
    borderColor: "#aaa",
    borderWidth: 2,
    margin: 2,
  },
  //Back
  backPanel: {
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 800,
  }
});