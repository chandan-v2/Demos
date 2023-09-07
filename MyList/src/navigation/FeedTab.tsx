// src/navigation/FeedTab.tsx
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FeedScreen from '../screens/FeedTab/FeedScreen';
import FeedDetailsScreen from '../screens/FeedTab/FeedDetailsScreen';

const FeedStack = createNativeStackNavigator();

const FeedTab = () => {
  return (
    <FeedStack.Navigator initialRouteName="FeedScreen">
      <FeedStack.Screen name="FeedScreen" component={FeedScreen} />
      <FeedStack.Screen name="FeedDetailsScreen" component={FeedDetailsScreen} />
    </FeedStack.Navigator>
  );
};

export default FeedTab;
