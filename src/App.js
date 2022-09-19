import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Router from './router';

export default function App() {
  return (
    <NavigationContainer style={styles.body}>
      <Router />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#FAFAFA',
  },
});
