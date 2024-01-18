import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'; 

const InventoryItem = (props) => {
    const { item_name, stock } = props
    const { item, itemName, stockSize, button } = styles

    return (
        <View style={item}>
            <View>
                <Text style={itemName}>{item_name}</Text>
                <Text style={stockSize}>Remaining Stock: {stock}</Text>
            </View>

            <View>
                <TouchableOpacity style={button}>
                    <Feather name="edit" size={24} color="white"/>
                </TouchableOpacity>  
            </View>      
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        display: 'flex',
        padding: 15,
        marginVertical: 5,
        marginHorizontal: 5,
        flexDirection: 'row',
        backgroundColor: 'blue'
      },

    itemName: {
        color: 'beige',
        fontSize: 25,
        textAlign: 'left'
    },

    stockSize: {
        fontSize: 20,
    },

    button: {
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: "#000080"
    }
})

export default InventoryItem