import React from 'react'
import { View, Text } from 'react-native'

const InventoryItem = (props) => {
    const { itemName } = props

    return (
        <View>
            <Text>{itemName}</Text>
        </View>
    )
}

export default InventoryItem