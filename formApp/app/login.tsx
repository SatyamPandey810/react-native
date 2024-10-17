import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'expo-router'
import MyButton from '@/components/MyButton'
import { ScrollView, TextInput } from 'react-native-gesture-handler'

const Login = () => {
    const [formData, setFormData] = useState({
        value1: "",
        value2: ""
    })
    const router = useRouter()

    const onCLick = () => {
        // router.navigate("/signUp")
        console.log(Number(formData.value1) + Number(formData.value2));
    }

    useEffect(() => {
        console.log("hello world");
    }, [])
    return (
        // <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        //     <Image source={require('@/assets/images/bg_1.jpg')} style={style.image} resizeMode='cover' />
        //     <View style={{ padding: 20, gap: 20 }}>
        //         <TextInput
        //             placeholder='Enter your email'
        //             keyboardType="email-address"
        //             style={style.input}
        //             onChangeText={(e) => setFormData(prev => ({ ...prev, value1: e }))}
        //         />
        //         <TextInput
        //             placeholder='Enter your password'
        //             style={style.input}
        //             onChangeText={(e) => setFormData(prev => ({ ...prev, value2: e }))}
        //         />
        //         <MyButton title={"Signup"} onPress={onCLick} />
        //     </View>
        // </ScrollView>
        <View>
            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, ]}
                contentContainerStyle={{ marginTop: 30 }}
                numColumns={3}
                showsVerticalScrollIndicator
                ListHeaderComponent={<View style={{backgroundColor:"blue",height:150,width:"100%"}}></View>}
                ListFooterComponent={<View style={{backgroundColor:"green",height:100,width:"100%"}}></View>}
                renderItem={({ item }) => {
                    // console.log(item.item);

                    return (
                        < View style={{
                            width: 100,
                            height: 100,
                            backgroundColor: "red",
                            marginBottom: 10,
                            marginRight: 4,
                            borderRadius: 50,
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        >
                            <Text style={{ color: "white", fontSize: 20 }}>{item}</Text>

                        </View>
                    )
                }}
            />

        </View>

    )
}

const style = StyleSheet.create({
    image: {
        width: "100%",
        height: 350,
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        padding: 4
    }
})

export default Login