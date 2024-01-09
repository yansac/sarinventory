import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { Feather } from '@expo/vector-icons'; 

const SupplierItem = (props) => {
    const { supplier_name } = props
    
    return (
        <View>
            <View>
                <Text>{supplier_name}</Text>
            </View>

            <View>
                <TouchableOpacity>
                    <Feather name="edit" size={24} color="white"/>
                </TouchableOpacity> 

                <TouchableOpacity>
                    <Feather name="edit" size={24} color="white"/>
                </TouchableOpacity> 

                <TouchableOpacity>
                    <Feather name="edit" size={24} color="white"/>
                </TouchableOpacity> 
            </View>
        </View>
    )
}

export default SupplierItem