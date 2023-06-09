import React from 'react';
import { Pressable, Text, View, Image } from 'react-native';
import { styles } from './styles';

const FavoriteProduct = ({ title, price, icon, image, onPress, onIconPress }) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Image source={{ uri: image }} style={styles.image}/>
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
