import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import MyButton from '@/components/MyButton'
import { useRouter } from 'expo-router'
import { TextInput } from 'react-native-gesture-handler'

const SignUp = () => {
    const router = useRouter()
    const onCLick = () => {
        router.navigate("/login")
    }
    useEffect(() => {

    }, [])
    return (
        <View style={{ flex: 1 }}>
            <Image source={require('@/assets/images/bg_1.jpg')} style={style.image} />
            <View style={{ padding: 20, gap: 10 }}>
                <TextInput placeholder='Enter your name' style={style.TextInput} />
                <TextInput placeholder='Enter your email' style={style.TextInput} />
                <TextInput placeholder='Enter your password' secureTextEntry={true} style={style.TextInput} />
            </View>
            <MyButton title={"Register"} onPress={onCLick} />
        </View>
    )
}
const style = StyleSheet.create({
    TextInput: {
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        padding: 8
    },
    image: {
        width: "100%",
        height: 350
    }
})

export default SignUp