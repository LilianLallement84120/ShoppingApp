import React, { useContext, useState } from 'react';
import { ActivityIndicator, Image, KeyboardAvoidingView, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import { useNavigation } from '@react-navigation/native';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { categories } from '../../../data/categories';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

const CreateListing = () => {
  const navigation = useNavigation();
  const [images, setImages] = useState([]);
  const [values, setValues] = useState({});
  const [loading, setLoading] = useState(false);

  const goBack = () => {
    navigation.goBack();
  };

  const onChange = (value, key) => {
    setValues((val) => ({ ...val, [key]: value }));
  };

  const onSubmit = async () => {
    try {
      setLoading(true);
      const storedProducts = await AsyncStorage.getItem('productCreate');

      let products = [];
      if (storedProducts) {
        products = JSON.parse(storedProducts);
      }
      const newProduct = { ...values, id: parseInt(values.id) }; // Convert id to integer
      products.push(newProduct);
      await AsyncStorage.setItem('productCreate', JSON.stringify(products));

      setValues({});
      navigation.navigate('MyListing');
    } catch (error) {
      console.log('Error adding product to AsyncStorage:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView>
      <Header showBack={true} onBackPress={goBack} title="Create a new listing" />

      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior="position">
          <Input
            placeholder="Photo"
            label="Photo"
            value={values.image}
            onChangeText={(v) => onChange(v, 'image')}
          />
          <Input
            placeholder="Id"
            label="id"
            value={values.id}
            onChangeText={(v) => onChange(v, 'id')}
          />
          <Input
            placeholder="Listing Title"
            label="Title"
            value={values.title}
            onChangeText={(v) => onChange(v, 'title')}
          />
          <Input
            placeholder="Select the category"
            label="Category"
            value={values.category}
            onChangeText={(v) => onChange(v, 'category')}
            type="picker"
            options={categories}
          />
          <Input
            placeholder="Enter price in USD"
            label="Price"
            value={values.price}
            onChangeText={(v) => onChange(v, 'price')}
            keyboardType="numeric"
          />
          <Input
            style={styles.textarea}
            placeholder="Tell us more..."
            label="Description"
            value={values.description}
            onChangeText={(v) => onChange(v, 'description')}
            multiline
          />
        </KeyboardAvoidingView>

        <Button onPress={onSubmit} title="Submit" style={styles.button} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(CreateListing);
