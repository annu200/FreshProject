import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import BrowseScreen from '../screens/BrowseScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const iconMap = {
  Home: require('../assets/Images/home.png'),
  Browse: require('../assets/Images/search.png'),
  Favourites: require('../assets/Images/favourite.png'),
  Cart: require('../assets/Images/cart.png'),
  Profile: require('../assets/Images/profile.png'),
};

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({color, size, focused}) => (
          <Image
            source={iconMap[route.name]}
            style={{
              width: size,
              height: size,
              tintColor: focused ? '#000' : 'gray',
              resizeMode: 'contain',
            }}
          />
        ),
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Browse" component={BrowseScreen} />
      <Tab.Screen name="Favourites" component={FavouritesScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
