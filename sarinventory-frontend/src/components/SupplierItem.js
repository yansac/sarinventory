import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { Feather } from '@expo/vector-icons'; 

const SupplierItem = (props) => {
    const { supplier_name, number } = props
    
    return (
        <View>
            <View>
                <Text>{supplier_name}</Text>
                <Text>{number}</Text>
            </View>

            <TouchableOpacity>
                <Feather name="edit" size={24} color="white"/>
            </TouchableOpacity> 
        </View>
    )
}

export default SupplierItem