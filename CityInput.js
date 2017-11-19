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
  Alert
} from 'react-native';


export default class CityInput extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      city: ''
    };
    this._sendCity = this._sendCity.bind(this);
  }

  _sendCity() {
    const city = this.state.city.toLowerCase();
    this.props._hello(city);
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="City from where you travel!"
          onChangeText={(city) => this.setState({city})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.city}
        </Text>
        <Button
          id="city"
          onPress={this._sendCity}
          title="Send city"
        />
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
