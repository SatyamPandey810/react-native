import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const MyButton = ({ title, onPress }) => {
    return (
        <View style={{ alignItems: "center" }}>
            {/* <Text>Continue</Text> */}
            {/* <Button title='Button'/> */}
            <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "orangered",
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: "center",
        width: "100%"
    },
    text: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold"
    }
})



export default MyButton