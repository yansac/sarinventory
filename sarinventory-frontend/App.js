import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.title}>Sarinventory</Text>
        <Text style={styles.subtitle}>STORE NAME</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Inventory</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Suppliers</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Prices</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Stock</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Debt</Text>
      </TouchableOpacity>

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
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#000080',
    padding: 10,
    height: '8%',
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 5,
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

export default App;

