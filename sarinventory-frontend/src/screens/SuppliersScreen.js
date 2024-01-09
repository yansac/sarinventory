import React from "react"
import { View, Text, SafeAreaView, StyleSheet, StatusBar, FlatList } from "react-native"
import SupplierItem from "../components/SupplierItem"

const DATA = [
    {
        supplier_id: "1",
        supplier_name: "ABC Supplies",
    }    
]

const SuppliersScreen = () => {
    const { container, header } = styles

    const renderItem = ({ supplier }) => (
        <SupplierItem
            supplier_id = { supplier.supplier_id }
            supplier_name = { supplier.supplier_name }
        />
    )

    return (
        <SafeAreaView style={container}>
            <View style={header}>
                <Text>
                    SUPPLIERS
                </Text>
            </View>

            <View>
                <FlatList
                    data = {DATA}
                    renderItem={ renderItem }
                    keyExtractor={(supplier) => supplier.supplier_id}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'light-blue'
    },

    header: {
        flexDirection: 'row'
    }
})

export default SuppliersScreen