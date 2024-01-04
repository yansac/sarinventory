import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import HomeComponent from './src/components/HomeComponent';

const App = () => {
  return (
    <View style={styles.container}>
      <HomeComponent/>
    </View>
  );
}

export default App;

