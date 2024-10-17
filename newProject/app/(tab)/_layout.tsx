import React from 'react'
import { Tabs } from 'expo-router'

const TabLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ title: "Home" }} />
            <Tabs.Screen name="about" options={{ title: "About-us" }} />
            <Tabs.Screen name="profile" />
        </Tabs>

    )
}

export default TabLayout