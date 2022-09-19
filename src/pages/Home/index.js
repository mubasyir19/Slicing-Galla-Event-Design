import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Gap, HomeProfile, Input} from '../../components';
import Upcoming from '../../components/molecules/Upcoming';
import Popular from '../../components/molecules/Popular';

export default function Home() {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <HomeProfile />
          <Gap height={23} />
          <Input placeholder="Search all events" />
        </View>
        <Gap height={20} />
        <Upcoming />
        <Gap height={29} />
        <Popular />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
  },
});
