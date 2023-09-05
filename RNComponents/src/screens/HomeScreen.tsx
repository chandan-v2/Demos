import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {NavigationContainerProps} from '@react-navigation/native';
import {Country} from '../types';
import CountryListScreen from './CountryListScreen';
//'./CountryListScreen';
// './types'; // Import your Country type

interface HomeScreenProps extends NavigationContainerProps {
  route: {
    params: {
      selectedCountry: Country | null;
    };
  };
}

const HomeScreen: React.FC<HomeScreenProps> = ({ route }) => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(route.params.selectedCountry);
  const [modalVisible, setModalVisible] = useState(false);

  const countries: Country[] = [
    { name: "United States", flag: "🇺🇸", countryCode: "+1", initials: "US" },
    { name: "United Kingdom", flag: "🇬🇧", countryCode: "+44", initials: "UK" },
    // Add more countries...
  ];

  const handleCountrySelection = (country: Country) => {
    setSelectedCountry(country);
    setModalVisible(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Picker
        selectedValue={selectedCountry}
        onValueChange={(itemValue) => setSelectedCountry(itemValue)}
        prompt="Select a country"
      >
        <Picker.Item label="Select a country" value={null} />
        {countries.map((country, index) => (
          <Picker.Item key={index} label={`${country.flag} ${country.countryCode} (${country.initials})`} value={country} />
        ))}
      </Picker>

      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={{ marginTop: 20 }}>Open Country List</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        {/* Pass the countries and onSelectCountry prop */}
        <CountryListScreen route={{ params: { countries: countries, onSelectCountry: handleCountrySelection } }} children={undefined} />
      </Modal>
    </View>
  );
};

export default HomeScreen;
