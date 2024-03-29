import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeScreen from "./src/screens/HomeScreen"
import InventoryScreen from './src/screens/InventoryScreen';
import AddItem from './src/screens/AddItem';
// import SuppliersScreen from './src/screens/SuppliersScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <InventoryScreen />
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
