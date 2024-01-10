import React from 'react';
import { StyleSheet, View } from 'react-native';
// import HomeScreen from "./src/screens/HomeScreen"
import InventoryScreen from './src/screens/InventoryScreen';
import SuppliersScreen from './src/screens/SuppliersScreen';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
