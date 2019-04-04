import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';

export default class Temperature extends Component {
  state = {
    temperatura: '',
    cidade: 'Passo Fundo'
  }

  componentWillMount = () => {
    this.getTemp()
  }

  getTemp = async () => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.cidade},br&lang=pt&units=metric&mode=json&appid=5325907441644570670df6cdec3acd5a`)
      .then((result) => {
        return result.json();
      }).then((dados) => {
        this.setState({
          temperatura: dados.list[0].main.temp,
        }, () => {
          console.log(this.state.temperatura)
        })
      }).catch(err => {
        console.error(err)
      })
  }

  handleButton = cidade => {
    this.setState({
      cidade
    }, () => {
      this.getTemp()
    })
  }
  
  render() {
    return (
      <View>
        <View style={styles.panel}>
          <View style={styles.greetingBox}>
            <Text style={styles.greeting}>
              {this.state.cidade}
            </Text>
            <Text style={styles.greeting}>
              {`${this.state.temperatura}º C`}
            </Text>
          </View>
          <View>
              <VrButton onClick={() => this.handleButton('Passo Fundo')} style={styles.button}>
                <Text>Passo Fundo</Text>
              </VrButton>
              <VrButton onClick={() => this.handleButton('Quarai')} style={styles.button}>
                <Text>Quaraí</Text>
              </VrButton>
          </View>
        </View>
        <View style={styles.backPanel}>
          <View style={styles.greetingBox}>
              <Text style={styles.greeting}>
                {this.state.cidade}
              </Text>
              <Text style={styles.greeting}>
                {`${this.state.temperatura}º C`}
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