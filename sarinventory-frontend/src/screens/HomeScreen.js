import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import HomePageButton from '../components/HomeButton';

const HomeComponent = () => {
  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.title}>Sarinventory</Text>
        <Text style={styles.subtitle}>STORE NAME</Text>
      </View>

      <HomePageButton buttonName = {"Inventory"}/>
      <HomePageButton buttonName = {"Suppliers"}/>
      <HomePageButton buttonName = {"Prices"}/>
      <HomePageButton buttonName = {"Debt"}/>

      <View>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText}>S</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText}>H</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },

  button1: {
    alignItems: 'center',
    backgroundColor: '#000080',
    padding: 10,
    height: '15%',
    width: '30%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  title: {
    alignItems: 'center',
    fontSize: 50,
    fontWeight: 'bold',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  subtitle: {
    alignItems: 'center',
    fontSize: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
  },


  buttonText: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#ffffff',
  },
});

export default HomeComponent;

