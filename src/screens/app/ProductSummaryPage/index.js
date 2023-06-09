import React, { useContext, useState, useEffect } from 'react';
import { ScrollView, Text, Image, View, Pressable, Linking } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../../components/Button';
import { products } from '../../../data/products';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductDetails = ({ route }) => {
  const { idProduit } = route.params;
  const navigation = useNavigation();
  const product = products.find((product) => product.id === idProduit);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    checkIfLiked();
  }, []);

  const checkIfLiked = async () => {
    try {
      const existingFavorites = await AsyncStorage.getItem('favorites');
      if (existingFavorites) {
        const favorites = JSON.parse(existingFavorites);
        setIsLiked(favorites.includes(idProduit));
      }
    } catch (error) {
      console.log('Error checking favorites:', error);
    }
  };

  const onBackPress = () => {
    navigation.goBack();
  };

  const onContact = () => {
    // Faire un appel téléphonique
    const phone = '127282827';
    Linking.openURL(`tel:${phone}`);

    // Envoyer un e-mail
    const email = 'support@mail.com';
    Linking.openURL(`mailto:${email}`);
  };

  const onBookmark = async () => {
    
    try {
      const existingFavorites = await AsyncStorage.getItem('favorites');
      let favorites = existingFavorites ? JSON.parse(existingFavorites) : [];

      if (isLiked) {
        favorites = favorites.filter((productId) => productId !== idProduit);
      } else {
        favorites.push(idProduit);
      }

      setIsLiked(!isLiked);

      // Mettre à jour les favoris dans AsyncStorage
      await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
    } catch (error) {
      console.log('Error saving favorites:', error);
    }
    console.log(await AsyncStorage.getItem('favorites'));
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.container}>
        <Image
          source={{ uri: product.image }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.content}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>$ {product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>

        <Pressable onPress={onBackPress} style={styles.backContainer}>
          <Image style={styles.backIcon} source={require('../../../assets/back.png')} />
        </Pressable>
      </ScrollView>

      <View style={styles.footer}>
        <Pressable onPress={onBookmark} style={[styles.bookmarkContainer, isLiked ? styles.bookmarkContainerLiked : null]}>
          <Image style={styles.bookmarkIcon} source={isLiked ? require('../../../assets/bookmark_filled.png') : require('../../../assets/bookmark_blue.png')} />
        </Pressable>
        <Button onPress={onContact} title='Contact Seller' />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(ProductDetails);
