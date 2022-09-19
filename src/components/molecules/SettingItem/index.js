import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconArrow} from '../../../assets';

export default function SettingItem({icon, menu, submenu}) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.icon}>{icon}</View>
        <View style={styles.listmenu}>
          <Text style={styles.menu}>{menu}</Text>
          <Text style={styles.submenu}>{submenu}</Text>
        </View>
      </View>
      <View style={styles.arrow}>
        <IconArrow />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#9096A6',
    paddingHorizontal: 24,
    paddingBottom: 16,
  },
  wrapper: {
    flexDirection: 'row',
  },
  icon: {
    justifyContent: 'center',
  },
  listmenu: {
    marginStart: 16,
  },
  menu: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#15181F',
  },
  submenu: {
    color: '#9096A6',
  },
  arrow: {
    justifyContent: 'center',
  },
});
