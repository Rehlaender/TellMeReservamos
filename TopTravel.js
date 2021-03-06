/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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


export default class TopTravel extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      city: ''
    };

    this._mapCities = this._mapCities.bind(this);
    this._chooseDestination = this._chooseDestination.bind(this);
  }

  _chooseDestination(city) {
    this.props._changeDestination(city.city_slug);
  }

  _mapCities() {
    return this.props.cities.map((city, i) => {
      return(
          <Button className="buttons" key={i} title={`${city.display}  *${parseFloat(city.popularity).toFixed(2)}`} onPress={ () => this._chooseDestination(city)}/>
      );
    });
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <Text>These are the top favorite cities to travel from your city (ordered by *popularity)</Text>
        {this._mapCities()}
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
  buttons: {
    fontSize: 20,
  },
});
