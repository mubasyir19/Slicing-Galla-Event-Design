import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Input} from '../../components/atoms';

export default function Explore() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's Explore Events</Text>
      <ScrollView>
        <View style={styles.wrapper}>
          <Input placeholder="Explore events" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#15181F',
    marginHorizontal: 24,
    marginBottom: 24,
  },
  wrapper: {
    marginHorizontal: 24,
  },
});
