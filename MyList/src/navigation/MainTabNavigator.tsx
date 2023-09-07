// src/navigation/MainTabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTab from './HomeTab';
import FeedTab from './FeedTab';
import SettingsTab from './SettingsTab';
import FeedScreen from '../screens/FeedTab/FeedScreen';
import ProfileScreen from '../screens/SettingsTab/ProfileScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name="Home" component={HomeTab}  options={{headerShown: false}}/>
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsTab} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;

// <Tab.Screen name="Home" component={HomeScreen}  options={{headerShown: false}}/>
// <Tab.Screen name="List" component={ListScreen} />
// <Tab.Screen name="Profile" component={ProfileScreen} />