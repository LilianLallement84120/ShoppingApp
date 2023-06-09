import React, { useContext } from 'react';
import SplashScreen from './src/screens/auth/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from './src/screens/auth/SignIn';
import SignUp from './src/screens/auth/SignUp';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserContext } from './App';
import Home from './src/screens/app/Home';
import Setting from './src/screens/app/Settings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favorites from './src/screens/app/Favorites';
import ProductSummaryPage from './src/screens/app/ProductSummaryPage';
import CreateNewListing from './src/screens/app/CreateNewListing';
import MyListing from './src/screens/app/MyListing';
import Settings from './src/screens/app/Settings';
import Profile from './src/screens/app/Profile';
import { Text, View } from 'react-native';
import { colors } from './src/utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{
      showLabel: false,
      tabBarShowLabel: false,
      //  headerShown: false,
      tabBarStyle: {
        height: 60,
        elevation: 0,
        borderRadius: 10,
        borderTopColor: colors.lightGrey
      }
    }}>
      <Tab.Screen name='Home' component={Home} options={{
        tabBarIcon: ({ focused, color, size }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Icon2 color={focused ? colors.iconFocused : color.icon } name='house-user' size={25}/>
            <Text style={{ color: focused ? colors.iconFocused : color.icon, fontSize: 12 }}>Home</Text>
          </View>
        )
      }}/>
      <Tab.Screen name='Favorites' component={Favorites} options={{
        tabBarIcon: ({ focused, color, size }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Icon2 color={focused ? colors.iconFocused : color.icon } name='heart' size={25}/>
            <Text style={{ color: focused ? colors.iconFocused : color.icon, fontSize: 12 }}>Favorites</Text>
          </View>
        )
      }}/>
      <Tab.Screen name='Profile' component={Profile} options={{
        tabBarIcon: ({ focused, color, size }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Icon color={focused ? colors.iconFocused : color.icon } name='person' size={25}/>
            <Text style={{ color: focused ? colors.iconFocused : color.icon, fontSize: 12 }}>Profile</Text>
          </View>
        )
      }}/>
    </Tab.Navigator>
  );
}

export default function Routes() {

  const { user } = useContext(UserContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        
        {true ?
          <>
            <Stack.Screen
              name='MyTabs'
              component={MyTabs}
              options={{ headerShown: false }}

            />
            <Stack.Screen
              name='ProductSummaryPage'
              component={ProductSummaryPage}
            />
            <Stack.Screen
              name='CreateNewListing'
              component={CreateNewListing}
            />
            <Stack.Screen
              name='MyListing'
              component={MyListing}
            />
            <Stack.Screen
              name='Settings'
              component={Settings}
            />
          </>
          :
          <>
            <Stack.Screen
              name='SplashScreen'
              component={SplashScreen}
              options={{ title: 'Welcome', headerShown: false }}

            />
            <Stack.Screen
              name='SignIn'
              component={SignIn}
            />
            <Stack.Screen
              name='SignUp'
              component={SignUp}
            />
            <Stack.Screen
              name='Favorites'
              component={Favorites}
            />
            
          </>}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
