import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {
  IconHelp,
  IconLanguage,
  IconRate,
  IconSetProfile,
  User2,
} from '../../assets';
import {SettingItem} from '../../components';

export default function Profile() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>
        <View style={styles.photoWrapper}>
          <View style={styles.photoProfile}>
            <Image source={User2} style={styles.iconProfile} />
          </View>
          <View style={styles.desc}>
            <Text style={styles.name}>Mahdy Mubasyir</Text>
            <Text style={styles.position}>Software Engineer</Text>
          </View>
        </View>
        <View style={styles.setting}>
          <SettingItem
            icon={<IconSetProfile />}
            menu="Edit Profile"
            submenu="Last update yesterday"
          />
          <SettingItem
            icon={<IconLanguage />}
            menu="Language"
            submenu="Available 12 languages"
          />
          <SettingItem
            icon={<IconRate />}
            menu="Give Us Rate"
            submenu="On Google Play Store"
          />
          <SettingItem
            icon={<IconHelp />}
            menu="Help Center"
            submenu="Read our guidelines"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#15181F',
  },
  photoWrapper: {
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  photoProfile: {
    borderWidth: 1,
    borderColor: '#F56B2A',
    padding: 7,
    borderRadius: 210,
  },
  iconProfile: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  desc: {
    marginTop: 16,
  },
  name: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    textAlign: 'center',
    color: '#15181F',
  },
  position: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    textAlign: 'center',
    color: '#9096A6',
  },
  setting: {
    marginTop: 30,
  },
});
