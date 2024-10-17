import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import React from 'react'

const Index = () => {
    return (
        <View style={style.container}>
            <View style={style.topContainer}>
                <Text style={style.headerTitle}>Leader board</Text>
                <View style={style.mainCardContainer}>
                    {
                        [1, 2, 3].map((item, index) => {
                            return <View key={index} style={[style.mainCard, item !== 2 && { marginTop: 20 }]}>
                                <Image source={require('@/assets/images/img1.jpg')} style={style.mainCardImage} resizeMode="cover" />
                                <Text style={style.mainCardTitle}>main card </Text>
                                <View style={style.mainCardRankContainer}>
                                    <Text style={style.mainCardRankContainerText}> {item}</Text>
                                </View>
                            </View>
                        })
                    }
                </View>
            </View>
            <FlatList data={listData} renderItem={({ item, index }) => {
                return (
                    <View style={style.card}>
                        <View style={style.cardDataContianer}>
                            <Text style={style.cardIndex}>{index + 1}</Text>
                            <Image source={{ uri: item?.imageUrl }} style={style.cardImage} resizeMode="cover" />
                            <Text style={style.cardTitle}>{item?.name}</Text>
                        </View>
                        <View style={style.cardRankContainer}>
                            <Text style={style.cardRankTitle}>{item?.score}</Text>
                        </View>
                    </View>
                )
            }} />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#272c35",
    },
    topContainer: {
        backgroundColor: "#1A1F25",
        paddingTop: 30,
        padding: 20,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        gap: 20,
        paddingBottom: 42

    },
    headerTitle: {
        textAlign: "center",
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    },
    mainCardContainer: {
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",

    },
    mainCard: {
        backgroundColor: "#272c35",
        padding: 10,
        alignItems: "center",
        borderRadius: 10,
        gap: 15,
        paddingBottom: 25,
        height: 170


    },
    mainCardImage: {
        width: 80,
        height: 90,
        padding: 20,

        borderRadius: 20
    },
    mainCardTitle: {
        color: "white",
        fontSize: 17,
        fontWeight: 600
    },
    mainCardRankContainer: {
        backgroundColor: "orange",
        // padding:10,
        width: 28,
        height: 28,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 28,
        position: "absolute",
        bottom: -15
    },
    mainCardRankContainerText: {
        color: "white",
        textAlign: "center"

    },
    card: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10
    },
    cardIndex: {
        color: "white"
    },
    cardImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginLeft: 10
    },
    cardTitle: {
        color: "white",
        fontSize: 17
    },
    cardDataContianer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    cardRankContainer: {},
    cardRankTitle: {
        color: "orange",
        fontSize: 17

    },
})


export default Index
const listData = [
    {
        score: "120,00",
        name: "john dou",
        imageUrl: "/assets/images/img1.jpg"
    },
    {
        score: "100,00",
        name: "jai ho",
        imageUrl: "/assets/images/img2.jpg"
    },
    {
        score: "208,00",
        name: "sholey",
        imageUrl: "/assets/images/img3.jpg"
    },
    {
        score: "890,00",
        name: "devra",
        imageUrl: "/assets/images/img4.jpg"
    },
    {
        score: "320,00",
        name: "raja",
        imageUrl: "/assets/images/test-1.jpg"
    },
    {
        score: "120,00",
        name: "john dou",
        imageUrl: "/assets/images/test-2.jpg"
    },
    {
        score: "500,00",
        name: "burger",
        imageUrl: "/assets/images/test-3.jpg"
    },
    {
        score: "784,00",
        name: "pizza",
        imageUrl: "/assets/images/test-4.jpg"
    },
    {
        score: "100,88",
        name: "samosa",
        imageUrl: "/assets/images/test-5.jpg"
    },
]