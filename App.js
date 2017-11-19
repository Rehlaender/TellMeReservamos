/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import CityInput from './CityInput';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      cities: []
    };
    this._mapCities = this._mapCities.bind(this);
    this._hello = this._hello.bind(this);
  }

  _mapCities() {
    return this.state.cities.map(function(city, i){
      return(
          <Text key={i}>{city.display}</Text>
      );
    });
  }

  _hello(city) {
    Alert.alert(city);
    //const starwars = "https://swapi.co/api/planets/";
    const panpan = "http://192.168.43.151:5000/places";
    const cityString = city;
    return fetch(panpan, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        city: cityString
      })
    })
    // return fetch(starwars)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({cities: responseJson});
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <Text>TellMe Reservamos</Text>

        <CityInput _hello={this._hello} />
        <View>
          {this._mapCities()}
        </View>
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
