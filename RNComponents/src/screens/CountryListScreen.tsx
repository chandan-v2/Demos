import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainerProps } from '@react-navigation/native';
import { Country } from '../types'; // Import your Country type

interface CountryListScreenProps extends NavigationContainerProps {
  route: {
    params: {
      countries: Country[];
      onSelectCountry: (country: Country) => void;
    };
  };
}

const CountryListScreen: React.FC<CountryListScreenProps> = ({ route }) => {
  const { countries, onSelectCountry } = route.params;

  return (
    <View style={{ flex: 1, marginTop: 100 }}>
      <FlatList
        data={countries}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onSelectCountry(item)}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CountryListScreen;