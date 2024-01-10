import React from "react";
import { View, StyleSheet, TextInput} from 'react-native'

const Input = ({placeholder}) => {
    const {inputContainer} = style

    return (
        <View style = {{marginBottom: 20}}>
            <View style={[inputContainer]}>
                <TextInput
                    placeholder= {placeholder}
                />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    inputContainer: {
        height: 55,
        backgroundColor: 'white',
        flexDirection: 'row',
        marginHorizontal: 15,
        borderWidth: 0.5,
        alignItems: 'center'
    }
})

export default Input;