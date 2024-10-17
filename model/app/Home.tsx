import { View, Text, Button, Modal } from 'react-native'
import React, { useState } from 'react'

const Home = () => {
    const [visible, setVisible] = useState(false)

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Button title='open model' onPress={() => setVisible(true)} />
            <Modal visible={visible} transparent animationType='slide' >
                <View style={{ backgroundColor: "red", height: 300 }}
                >
                    <Button title="close modal" onPress={() => setVisible(false)} />
                </View>
            </Modal>
        </View>
    )
}

export default Home