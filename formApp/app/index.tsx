import MyButton from "@/components/MyButton";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
    const router = useRouter()
    const onCLick = () => {
        router.navigate("/login")
    }
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <MyButton title={"Login"} onPress={onCLick} />
            
        </View>
    );
}
