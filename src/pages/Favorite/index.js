import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FavoriteItem from '../../components/molecules/FavoriteItem';
import {ILComing1, ILComing2, ILPopular1} from '../../assets';

export default function Favorite() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.page}>Favorite Page</Text>
        <View style={styles.favorite}>
          <FavoriteItem
            image={ILComing1}
            name="Dancing in The Moon"
            rated="5,0"
          />
          <FavoriteItem image={ILComing2} name="Car Free Day" rated="4,8" />
          <FavoriteItem image={ILPopular1} name="Fashion Week" rated="4,5" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  page: {
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#15181F',
  },
  favorite: {
    marginTop: 30,
  },
});
