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
    Alert.alert('ayuda');
    const travel = [this.props.origin, this.props.destination, this.state.start, this.state.finish];
    this.props._getTravels(travel);
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="start date!"
          value={this.state.start}
          onChangeText={(start) => this.setState({start})}
        />
        <TextInput
          style={{height: 40}}
          placeholder="DD-MM-YYYY"
          value={this.state.finish}
          onChangeText={(finish) => this.setState({finish})}
        />
        <TextInput
          style={{height: 40}}
          value={this.props.origin}
        />
        <TextInput
          style={{height: 40}}
          value={this.props.destination}
        />
        <Button
          id="city"
          title="Send trip"
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
