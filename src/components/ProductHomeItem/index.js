import React from 'react';
import { Pressable, Text, Image } from 'react-native';
import { styles } from './styles';

export default function ProductHomeItem({ image, title, price, props, onPress }) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </Pressable>
  );
}
