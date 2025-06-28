import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import ProductListScreen from '../screens/ProductListScreen';
import ProductDetailScreen from '../screens/ ProductDetailScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Main bottom tabs */}
        <Stack.Screen
          name="MainTabs"
          component={BottomTabs}
          options={{headerShown: false}}
        />

        {/* Other pages pushed on top of tabs */}
        <Stack.Screen name="ProductList" component={ProductListScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
