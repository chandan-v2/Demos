import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React from 'react';
import {PropsWithChildren} from 'react';

type LoaderProps = PropsWithChildren<{
  show: boolean;
}>;

const Loader = ({show}: LoaderProps) => {
  return (
    <View style={styles.container}>
      {show ? <ActivityIndicator size={'large'} color={'#3D3D3D'} /> : null}
    </View>
  );
};



export default Loader;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});