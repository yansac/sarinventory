import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'; 

const InventoryItem = (props) => {
    const { item_name, stock } = props
    const { item, itemName, button } = styles

    return (
        <View style={item}>
            <View>
                <Text style={itemName}>{item_name}</Text>
                <Text style={itemName}>Remaining Stock: {stock}</Text>
            </View>

            <TouchableOpacity style={button}>
                <Feather name="edit" size={24} color="white"/>
            </TouchableOpacity>        
            </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 25,
        marginVertical: 5,
        marginHorizontal: 34,
        flexDirection: 'row',
        backgroundColor: 'blue'
      },

    itemName: {
        color: 'beige',
        fontSize: 26,
        textAlign: 'left'
    },

    button: {
        alignItems: 'center',
        backgroundColor: '#000080',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
})

export default InventoryItem