import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  IconExplore,
  IconExploreActive,
  IconFavorite,
  IconFavoriteActive,
  IconHome,
  IconHomeActive,
  IconProfile,
  IconProfileActive,
  IconTicket,
  IconTicketActive,
} from '../../../assets';

export default function TabItem({title, active, onPress, onLongPress}) {
  const Icon = () => {
    if (title === 'Home') {
      return active ? <IconHomeActive /> : <IconHome />;
    }
    if (title === 'Explore') {
      return active ? <IconExploreActive /> : <IconExplore />;
    }
    if (title === 'Favorite') {
      return active ? <IconFavoriteActive /> : <IconFavorite />;
    }
    if (title === 'Ticket') {
      return active ? <IconTicketActive /> : <IconTicket />;
    }
    if (title === 'Profile') {
      return active ? <IconProfileActive /> : <IconProfile />;
    }
    return <IconHome />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: active => ({
    fontFamily: 'Poppins-Medium',
    color: active ? '#F56B2A' : '#8F929B',
    fontSize: 10,
  }),
});
