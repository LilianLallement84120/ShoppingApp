import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { products } from '../../../data/products';
import FavoriteProduct from '../../../components/FavoriteProduct';
import Header from '../../../components/Header';

const Favorites = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    const fetchFavoriteProducts = async () => {
      try {
        const favorites = await AsyncStorage.getItem('favorites');
        if (favorites) {
          const favoriteProductIds = JSON.parse(favorites);
          const filteredProducts = products.filter(product =>
            favoriteProductIds.includes(product.id)
          );
          setFavoriteProducts(filteredProducts);
        }
      } catch (error) {
        console.log('Error retrieving favorites:', error);
      }
    };

    fetchFavoriteProducts();
  }, [isFocused]);

  const removeFavorite = async (productId) => {
    try {
      const favorites = await AsyncStorage.getItem('favorites');
      if (favorites) {
        const favoriteProductIds = JSON.parse(favorites);
        const updatedFavorites = favoriteProductIds.filter(id => id !== productId);
        await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        const filteredProducts = products.filter(product =>
          updatedFavorites.includes(product.id)
        );
        setFavoriteProducts(filteredProducts);
      }
    } catch (error) {
      console.log('Error removing favorite:', error);
    }
  };

  const renderItem = ({ item }) => {
    const onProductPress = () => {
      navigation.navigate('ProductSummaryPage', { idProduit: item.id });
    };

    const onRemove = () => {
      Alert.alert(
        'Are you sure you want to remove this item from your favorites?',
        '',
        [
          { text: 'Yes', onPress: () => removeFavorite(item.id) },
          { text: 'Cancel' }
        ]
      );
    };

    const onIconPress = () => {
      onRemove();
    };

    return (
      <FavoriteProduct
        onPress={onProductPress}
        onIconPress={onIconPress}
        {...item}
      />
    );
  };

  return (
    <SafeAreaView>
      <Header title='Favorites' />

      <FlatList
        data={favoriteProducts}
        ListEmptyComponent={(
          <Text style={{ textAlign: 'center', marginTop: 40 }}>
            Vous n'avez pas de favoris pour le moment
          </Text>
        )}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
      />
    </SafeAreaView>
  );
};

export default React.memo(Favorites);
