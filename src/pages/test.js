import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';

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
});



export default class Test extends Component {

  render() {
    const { navigation } = this.props
    const { name, title,userAgent = "Mozi/" } = navigation.state.params

    return (
      <View style={styles.container} >
        <Text style={styles.welcome}>
          {name}
          {title}
        </Text>
      </View>
    );
  }
}
