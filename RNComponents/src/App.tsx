import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'
//'.screens/HomeScreen';
import CountryListScreen from './screens/CountryListScreen';
import { Country } from './types'; // Import your Country type

const countries: Country[] = [
  { name: 'India', countryCode: '+91', initials: 'IN', flag: '🇮🇳' },
  { name: "United States", flag: "🇺🇸", countryCode: "+1", initials: "US" },
  { name: "United Kingdom", flag: "🇬🇧", countryCode: "+44", initials: "UK" },

];

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} initialParams={{ selectedCountry: null }} />
        <Stack.Screen name="CountryList" component={CountryListScreen} initialParams={{ countries: countries }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
