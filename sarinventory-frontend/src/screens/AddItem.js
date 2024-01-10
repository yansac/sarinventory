import React from "react"
import { SafeAreaView, Button } from "react-native"
import Input from "../components/Input"

const AddItem = () => {

    return (
        <SafeAreaView>
            <Input
                placeholder = "Item Name"
            />

            <Input
                placeholder = "Item Type"
            />

            <Input
                placeholder = "Quantity"
            />

            <Input
                placeholder = "Price"
            />

            <Button
                title="ADD ITEM"
                type="outline"
            />
        </SafeAreaView>
    )
}

export default AddItem