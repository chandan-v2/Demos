// src/navigation/SettingsTab.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';
import SupportScreen from '../screens/SupportScreen';
import SignoutScreen from '../screens/SignoutScreen';

const Stack = createNativeStackNavigator();

const SettingsTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingsComponent} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Support" component={SupportScreen} />
      <Stack.Screen name="Signout" component={SignoutScreen} />
    </Stack.Navigator>
  );
};

export default SettingsTab;
