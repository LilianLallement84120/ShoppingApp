import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyProduct from '../../../components/MyProduct';
import Header from '../../../components/Header';

const MyListing = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [favoriteProducts, setProductsCreate] = useState([]);

  useEffect(() => {
    const fetchProductsCreate = async () => {
      try {
        const storedProducts = await AsyncStorage.getItem('productCreate');
        if (storedProducts) {
          const favoriteProducts = JSON.parse(storedProducts);
          setProductsCreate(favoriteProducts);
        }
      } catch (error) {
        console.log('Error retrieving favorite products:', error);
      }
    };

    fetchProductsCreate();
  }, [isFocused]);

  const removeProduct = async (productId) => {
    try {
      const storedProducts = await AsyncStorage.getItem('productCreate');
      if (storedProducts) {
        let favoriteProducts = JSON.parse(storedProducts);
        favoriteProducts = favoriteProducts.filter(product => product.id !== productId);
        await AsyncStorage.setItem('productCreate', JSON.stringify(favoriteProducts));
        setProductsCreate(favoriteProducts);
      }
    } catch (error) {
      console.log('Error removing favorite product:', error);
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
          { text: 'Yes', onPress: () => removeProduct(item.id) },
          { text: 'Cancel' }
        ]
      );
    };

    const onIconPress = () => {
      onRemove();
    };

    return (
      <MyProduct
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

export default React.memo(MyListing);
