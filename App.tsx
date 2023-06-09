import React, { createContext, useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './Routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { products } from './src/data/products';

export const UserContext = createContext({});

function App(): JSX.Element {
  const [user, setUser] = useState();

  useEffect(() => {
    console.log('user : ', user);
  }, [user]);

  useEffect(() => {
    const storeProductsInLocalStorage = async () => {
      try {
        await AsyncStorage.setItem('product', JSON.stringify(products));
      } catch (error) {
        console.log('Error storing products in AsyncStorage:', error);
      }
    };

    storeProductsInLocalStorage();
  }, []);

  return (
    <SafeAreaProvider>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes />
      </UserContext.Provider>
    </SafeAreaProvider>
  );
}

export default App;
