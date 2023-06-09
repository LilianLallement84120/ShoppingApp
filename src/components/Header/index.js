import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

export default function Header({ title, onBackPress, onLogout, showLogout, showSearch,
  showBack, onSearch, keyword }) {
  return (
    <View style={styles.container}></View>
  );
}
