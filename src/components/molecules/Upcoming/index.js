import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {IconLocation, ILComing1, ILComing2} from '../../../assets';
import {Gap} from '../../atoms';

export default function Upcoming() {
  return (
    <View>
      <Text style={styles.sub}>Upcoming Events</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.card}>
          <View>
            <Image source={ILComing1} style={styles.img} />
            <View style={styles.execution}>
              <Text style={styles.date}>9</Text>
              <Text style={styles.month}>Sept</Text>
            </View>
          </View>
          <View style={styles.location}>
            <IconLocation />
            <Text style={styles.city}>Bandung, ID</Text>
          </View>
          <Text style={styles.event}>Lampion: From Earth to Moon 2022</Text>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.nameButton}>Join</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <View>
            <Image source={ILComing2} style={styles.img} />
            <View style={styles.execution}>
              <Text style={styles.date}>12</Text>
              <Text style={styles.month}>Sept</Text>
            </View>
          </View>
          <View style={styles.location}>
            <IconLocation />
            <Text style={styles.city}>Bandung, ID</Text>
          </View>
          <Text style={styles.event}>
            Car Free Day Bandung 06:00 PM - 10:00 PM
          </Text>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.nameButton}>Join</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <View>
            <Image source={ILComing1} style={styles.img} />
            <View style={styles.execution}>
              <Text style={styles.date}>9</Text>
              <Text style={styles.month}>Sept</Text>
            </View>
          </View>
          <View style={styles.location}>
            <IconLocation />
            <Text style={styles.city}>Bandung, ID</Text>
          </View>
          <Text style={styles.event}>Lampion: From Earth to Moon 2022</Text>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.nameButton}>Join</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Gap width={24} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sub: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#15181F',
    marginHorizontal: 24,
  },
  card: {
    paddingHorizontal: 12,
    paddingVertical: 13,
    backgroundColor: '#FFFFFF',
    width: 200,
    borderRadius: 12,
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 20,
  },
  img: {
    width: 176,
    height: 110,
    borderRadius: 8,
  },
  execution: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: 'rgba(252, 255, 255, 0.2)',
    blurRadius: 18,
    position: 'absolute',
    top: 10,
    left: 10,
    borderRadius: 8,
  },
  date: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  month: {
    fontFamily: 'Poppins-Regular',
    color: '#FFFFFF',
    fontSize: 8,
    textAlign: 'center',
  },
  location: {
    flexDirection: 'row',
    marginTop: 10,
  },
  city: {
    marginStart: 4,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#9096A6',
  },
  event: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#15181F',
  },
  button: {
    backgroundColor: '#F86A30',
    paddingVertical: 6,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
  },
  nameButton: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
