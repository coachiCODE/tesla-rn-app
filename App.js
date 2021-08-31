import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View,Image } from 'react-native';
import CarList from './components/CarList/carList';
import Header from './components/Navigation/header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarList/>
      <Image 
      source={require('./assets/images/arrow.png')}
      style={styles.arrow}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow:{
    width:'30%',
    height:'20%',
    bottom:10,
    position:'absolute',
  }
});
