// src/navigation/SettingsTab.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/SettingsTab/ProfileScreen';
import SupportScreen from '../screens/SettingsTab/SupportScreen';
import SignoutScreen from '../screens/SettingsTab/SignoutScreen';
import SettingsScreen from '../screens/SettingsTab/SettingsScreen';

const Stack = createNativeStackNavigator();

const SettingsTab = () => {
  return (
    <Stack.Navigator initialRouteName="SettingsScreen">
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="SupportScreen" component={SupportScreen} />
      <Stack.Screen name="SignoutScreen" component={SignoutScreen} />
    </Stack.Navigator>
  );
};

export default SettingsTab;
