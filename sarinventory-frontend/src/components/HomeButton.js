import React from "react";
import { View, Text, StyleSheet } from "react-native"

const HomePageButton = (props) => {
    // eslint-disable-next-line react/prop-types
    const { buttonName } = props
    const { container, buttonText} = styles

    return (
        <View style={container}>
            <Text style={buttonText}> { buttonName } </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      marginHorizontal: 0,
      marginVertical: 10,
      padding: 20,
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#000080',
    },
  
    buttonText: {
      fontWeight: 'bold',
      fontSize: 35,
      color: 'white',
    },
  });

export default HomePageButton