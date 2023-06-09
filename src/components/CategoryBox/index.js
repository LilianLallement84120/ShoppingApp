import React from 'react';
import { Pressable, Text, View, Image } from 'react-native';
import { styles } from './styles';
import { colors } from '../../utils/colors';

export default function CategoryBox({ title, image, onPress, isSelected }) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={[styles.imageContainer, isSelected ? { backgroundColor: colors.black } : null]}>
        <Image source={{ uri: image }} style={styles.image}/>
      </View>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}
