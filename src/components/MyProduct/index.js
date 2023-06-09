import React from 'react';
import { Pressable, Text, View, Image } from 'react-native';
import { styles } from './styles';

const FavoriteProduct = ({ title, price, icon, onPress, onIconPress }) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>{price}</Text>
            </View>

            <Pressable onPress={onIconPress}>
                <Image source={icon || require('../../assets/close.png')} style={styles.icon} />
            </Pressable>
        </Pressable>
    );
};

export default React.memo(FavoriteProduct);
