import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import {ILPopular1, ILPopular2} from '../../../assets';
import {Gap} from '../../atoms';

export default function Popular() {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.sub}>Popular Now</Text>
        <Text style={styles.see}>See All</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.card}>
          <View>
            <Image source={ILPopular1} style={styles.img} />
            <View style={styles.status}>
              <Text style={styles.fee}>Free</Text>
            </View>
          </View>
          <Text style={styles.event}>Dancing in The Moon</Text>
          <View style={styles.execution}>
            <Text style={styles.date}>9 August 2022</Text>
            <Text>•</Text>
            <Text style={styles.time}>17:00 PM</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View>
            <Image source={ILPopular2} style={styles.img} />
            <View style={styles.status}>
              <Text style={styles.fee}>Free</Text>
            </View>
          </View>
          <Text style={styles.event}>Car Free Day in Bandung</Text>
          <View style={styles.execution}>
            <Text style={styles.date}>12 September 2022</Text>
            <Text>•</Text>
            <Text style={styles.time}>17:00 PM</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View>
            <Image source={ILPopular1} style={styles.img} />
            <View style={styles.status}>
              <Text style={styles.fee}>Free</Text>
            </View>
          </View>
          <Text style={styles.event}>Lampion: From Earth to Moon 2022</Text>
          <View style={styles.execution}>
            <Text style={styles.date}>9 August 2022</Text>
            <Text>•</Text>
            <Text style={styles.time}>17:00 PM</Text>
          </View>
        </View>
        <Gap width={24} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
  },
  see: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#8F929B',
    marginTop: 3,
  },
  sub: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#15181F',
    // marginHorizontal: 24,
  },
  card: {
    paddingHorizontal: 12,
    paddingVertical: 13,
    backgroundColor: '#FFFFFF',
    width: 290,
    borderRadius: 12,
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 20,
  },
  img: {
    width: 266,
    height: 150,
    borderRadius: 8,
    position: 'relative',
  },
  status: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    backgroundColor: '#FFEDE9',
    position: 'absolute',
    bottom: 10,
    right: 10,
    borderRadius: 8,
  },
  fee: {
    fontFamily: 'Poppins-Medium',
    color: '#F86A30',
  },
  event: {
    fontFamily: 'Poppins-SemiBold',
    marginTop: 10,
    fontSize: 14,
    color: '#15181F',
  },
  execution: {
    flexDirection: 'row',
  },
  date: {
    fontFamily: 'Poppins-Regular',
    marginEnd: 4,
  },
  time: {
    fontFamily: 'Poppins-Regular',
    marginStart: 4,
  },
});
