import React from "react"
import { View, Text } from 'react-native'

const EmptyComponent = (props) => {
    const { listType } = props
    return (
        <View>
            <Text>Your inventory is empty please add {listType}</Text>
        </View>
    )
}

export default EmptyComponent