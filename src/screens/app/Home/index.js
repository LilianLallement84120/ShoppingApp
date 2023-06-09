import React, { useState, useEffect } from 'react';
import { FlatList, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProductHomeItem from '../../../components/ProductHomeItem';
import { categories } from '../../../data/categories';
import CategoryBox from '../../../components/CategoryBox';
import Header from '../../../components/Header';

const Home = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState();
  const [searchText, setSearchText] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const storedProducts = await AsyncStorage.getItem('product');
        if (storedProducts) {
          setProducts(JSON.parse(storedProducts));
        }
      } catch (error) {
        console.log('Error retrieving products from AsyncStorage:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const updateProducts = async () => {
      try {
        await AsyncStorage.setItem('product', JSON.stringify(products));
      } catch (error) {
        console.log('Error updating products in AsyncStorage:', error);
      }
    };

    updateProducts();
  }, [products]);

  const renderCategory = (item) => {
    const category = item.item;
    return (
      <CategoryBox
        {...category}
        isSelected={category === selectedCategory}
        onPress={() => setSelectedCategory(category)}
      />
    );
  };

  const onProduct = (idProduit) => {
    navigation.navigate('ProductSummaryPage', { idProduit });
  };

  const renderProductItem = (item) => {
    const product = item.item;
    return (
      <TouchableOpacity onPress={() => onProduct(product.id)}>
        <ProductHomeItem onPress={() => onProduct(product.id)} {...product} />
      </TouchableOpacity>
    );
  };

  const filteredProducts = () => {
    let filtered = products;
    if (selectedCategory) {
      if (selectedCategory.id !== 0) {
        filtered = filtered.filter(
          (product) => product.category === selectedCategory.id
        );
      }
    }
    if (searchText) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    return filtered;
  };

  return (
    <View style={styles.container}>
      <Header />
      <SafeAreaView style={styles.safeAreaView}>
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher un produit..."
          value={searchText}
          onChangeText={setSearchText}
        />
        <FlatList
          data={categories}
          renderItem={renderCategory}
          keyExtractor={(item) => String(item.id)}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
        <FlatList
          data={filteredProducts()}
          renderItem={renderProductItem}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          ListFooterComponent={<View style={{ height: 100 }} />}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  safeAreaView: {
    flex: 1,
    marginTop: 0,
  },
  searchInput: {
    height: 40,
    marginHorizontal: 16,
    marginTop: 16,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
  },
});

export default Home;
