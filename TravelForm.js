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


export default class TravelForm extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      start: '01-11-2017',
      finish: '31-03-2018'
    };
    this._useDate = this._useDate.bind(this);
  }

  _useDate() {
    const travel = [this.props.origin, this.props.destination, this.state.start, this.state.finish];
    this.props._getTravels(travel);
  }

  render() {
    return (
      <View>
        <Text style={{fontWeight: 'bold'}}>This will be your wanted travel propierties.</Text>
        <Text>Start date.</Text>
        <TextInput
          style={{height: 40}}
          placeholder="start date!"
          value={this.state.start}
          onChangeText={(start) => this.setState({start})}
        />
        <Text>End date.</Text>
        <TextInput
          style={{height: 40}}
          placeholder="DD-MM-YYYY"
          value={this.state.finish}
          onChangeText={(finish) => this.setState({finish})}
        />
        <Text>Origin.</Text>
        <TextInput
          style={{height: 40}}
          value={this.props.origin}
        />
        <Text>Destination.</Text>
        <TextInput
          style={{height: 40}}
          value={this.props.destination}
        />
        <Button
          id="city"
          title="Get similar trip"
          onPress={this._useDate}
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
