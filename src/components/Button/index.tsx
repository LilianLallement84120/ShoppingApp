import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

export default function Button({ title, onPress, disabled, style }) {
  return (
    <TouchableOpacity activeOpacity={0.6} style={[styles.container, style]} onPress={onPress} disabled={disabled}>
      <Text style={styles.title}>{ title }</Text>
    </TouchableOpacity>
  );
}