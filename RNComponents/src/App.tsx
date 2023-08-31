import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';


function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <Text> Ttile </Text>
      </View>
    </SafeAreaView>
  );
}


export default App;
