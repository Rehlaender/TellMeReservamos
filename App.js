/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import CityInput from './CityInput';
import TopTravel from './TopTravel';
import TravelForm from './TravelForm';
import MyTravel from './MyTravel';

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  ScrollView
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
      origin: '',
      destination: '',
      cities: [],
      step: '1'
    };
    this._hello = this._hello.bind(this);
    this._changeDestination = this._changeDestination.bind(this);
    this._changeOrigin = this._changeOrigin.bind(this);
    this._getTravels = this._getTravels.bind(this);
    this._restartFlow = this._restartFlow.bind(this);
  }

  _restartFlow() {
    this.setState({step:'1'});
  }

  _changeOrigin(origin) {
    this.setState({origin: origin, step: '2'});
  }

  _changeDestination(destination) {
    this.setState({destination: destination, step: '3'});
  }

  _hello(city) {
    this._changeOrigin(city);
    //const starwars = "https://swapi.co/api/planets/";
    const panpan = "https://reservamoseto.herokuapp.com/places";
    const cityString = city;
    this.setState({ city: cityString });
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

  _getTravels(travel) {
    const panpan = "https://reservamoseto.herokuapp.com/quotes";
    return fetch(panpan, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        origin: travel[0],
        destination: travel[1],
        start: travel[2],
        finish: travel[3],
      })
    })
    // return fetch(starwars)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({travels: responseJson, step: '4'});
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <ScrollView style={{padding: 10, margin: 10}}>
        <Text>TellMe Reservamos</Text>
        <Text>{this.state.city}</Text>
        <Text>{this.state.destination}</Text>
        {this.state.step === '1' ? <CityInput _hello={this._hello} /> : null}
        {this.state.step === '2' ? <TopTravel cities={this.state.cities} _changeDestination={this._changeDestination} /> : null}
        {this.state.step === '3' ? <TravelForm _getTravels={this._getTravels} origin={this.state.origin} destination={this.state.destination} /> : null}
        {this.state.step === '4' ? <MyTravel travels={this.state.travels} origin={this.state.origin} destination={this.state.destination} /> : null}
        <Button color="red" title="Restart" onPress={this._restartFlow}/>
      </ScrollView>
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
