import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {User2} from '../../../assets/dummy';
import {Gap} from '../../atoms';

export default function HomeProfile() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.near}>Find events near</Text>
        <Gap height={2} />
        <Text style={styles.location}>Bandung, ID</Text>
      </View>
      <Image source={User2} style={styles.avatar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginStart: 24,
    // marginEnd: 24,
    marginTop: 24,
  },
  near: {
    fontWeight: '400',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#A6A7AB',
  },
  location: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#15181F',
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 52 / 2,
  },
});
