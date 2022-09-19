import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconRate} from '../../../assets';

export default function FavoriteItem({image, name, rated}) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.thumbnail} />
      <View style={styles.desc}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.rating}>
          <View style={styles.icon}>
            <IconRate />
          </View>
          <Text style={styles.rate}>{rated}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    flexDirection: 'row',
    marginBottom: 24,
  },
  thumbnail: {
    justifyContent: 'center',
    width: 106,
    height: 70,
    borderRadius: 12,
  },
  desc: {
    marginStart: 10,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    color: '#15181F',
  },
  rating: {
    flexDirection: 'row',
  },
  icon: {},
  rate: {
    marginStart: 5,
    color: '#F86A30',
    fontSize: 16,
    justifyContent: 'center',
    fontFamily: 'Poppins-Medium',
  },
});
