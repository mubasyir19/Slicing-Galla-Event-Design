import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {IconSearch} from '../../../assets';

export default function Input({placeholder}) {
  return (
    <View style={styles.container}>
      <IconSearch />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={'gray'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 18,
  },
  input: {
    fontFamily: 'Poppins-Regular',
    marginStart: 12,
    color: 'black',
    padding: 0,
    height: 25,
    width: 230,
  },
});
