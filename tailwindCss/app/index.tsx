import { useFonts } from 'expo-font';
import React from 'react';
import { Text, View } from 'react-native';


export default function Index() {
  const [fontLoades]=useFonts({
    
  })
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        Edit app/index.tsx to edit this
      </Text>
    </View>
  );
}
