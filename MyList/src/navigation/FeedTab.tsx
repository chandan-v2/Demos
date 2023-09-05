// src/navigation/FeedTab.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeedScreen from '../screens/FeedTab/FeedScreen'; 
import FeedDetailsScreen from '../screens/FeedTab/FeedDetailsScreen';

const Stack = createNativeStackNavigator();

const FeedTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FeedScreen" component={FeedScreen} />
      <Stack.Screen name="FeedDetailsScreen" component={FeedDetailsScreen} />
    </Stack.Navigator>
  );
};

export default FeedTab;
