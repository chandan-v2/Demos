// src/navigation/HomeTab.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeTab/HomeScreen';
import ListScreen from '../screens/HomeTab/ListScreen';
import DetailScreen from '../screens/HomeTab/DetailScreen';

const Stack = createNativeStackNavigator();

const HomeTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ListScreen" component={ListScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default HomeTab;
