// src/navigation/FeedTab.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeedScreen from '../screens/FeedScreen';
import FeedDetailsScreen from '../screens/FeedDetailsScreen';

const Stack = createNativeStackNavigator();

const FeedTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={FeedScreen} />
      <Stack.Screen name="FeedDetails" component={FeedDetailsScreen} />
    </Stack.Navigator>
  );
};

export default FeedTab;
