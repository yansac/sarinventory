import React from "react"
import { Text, FlatList, SafeAreaView, StyleSheet, StatusBar, View, TouchableOpacity } from "react-native"
import InventoryItem from "../components/InventoryItem"
import EmptyComponent from "../components/EmptyComponent";
import { Feather } from '@expo/vector-icons';

const DATA = [
    {
        item_id: 1,
        item_name: 'C2 Solo 16oz',
        stock: 5
    },

    {
        item_id: 2,
        item_name: 'Lay Chips Original',
        stock: 0
    },

    {
        item_id: 3,
        item_name: 'Hansel Mocha',
        stock: 6
    }
]

const InventoryScreen = () => {
    const { container, button, header } = styles

    const renderItem = ({ item }) => (
        <InventoryItem
            id = {item.item_id}
            item_name = {item.item_name}
            stock = {item.stock}
        />
    )

    return (
        <SafeAreaView style={container}>
            <View style= {header}> 
                <Text>INVENTORY</Text>

                <TouchableOpacity style={button}>
                    <Feather name="edit" size={24} color="white"/>
                </TouchableOpacity>

                <TouchableOpacity style={button}>
                    <Feather name="edit" size={24} color="white"/>
                </TouchableOpacity>

                <TouchableOpacity style={button}>
                    <Feather name="edit" size={24} color="white"/>
                </TouchableOpacity>
            </View>

            <View>
                <FlatList
                    data = {DATA}
                    renderItem = { renderItem }
                    keyExtractor={ (item) => item.id }
                    ListEmptyComponent={
                        <EmptyComponent
                            listType={' an item'}
                        />
                    }
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        marginHorizontal: 20,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'light-blue',
    },

    header: {
        flexDirection: 'row'
    },

    button: {
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: '#000080',
    }
})

export default InventoryScreen