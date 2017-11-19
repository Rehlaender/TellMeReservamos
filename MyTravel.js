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


export default class MyTravel extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      travels: []
    };

    this._buyTicket = this._buyTicket.bind(this);
  }

  _buyTicket(travel) {
    const say = `This travel will cost $ ${travel.price}`;
    Alert.alert(say);
  }

  _mapTravels() {
    return this.props.travels.map((travel, i) => {
      return(
          <View style={{margin: 10}} key={i}>
            <Text>Travel duration: {travel.duration} mins</Text>
            <Text>Date: {travel.date}</Text>
            <Text>Score of this travel: {travel.score}</Text>
            <Text>Transportation: {travel.transportation}</Text>
            <Button className="buttons" key={i} title="Buy" onPress={ () => this._buyTicket(travel)}/>
          </View>
      );
    });
  }

  render() {
    return (
      <View>
        <Text style={styles.welcome}>Travel </Text>
        <Text>From: {this.props.origin}</Text>
        <Text>To: {this.props.destination}</Text>
        {this._mapTravels()}
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
