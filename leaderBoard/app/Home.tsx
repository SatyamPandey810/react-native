import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={style.mainContianer} >
      <View style={style.topContainer}>
        <Text style={style.mainContianerText}>Leader board</Text>
        <View style={style.cardContainer}>
          {
            [1, 2, 3].map((item, index) => {
              return (
                <View style={style.mainContainerCard}>
                  <Image
                    source={require('@/assets/images/test-1.jpg')}
                    resizeMode='cover'
                    style={style.mainContainerCardImage}
                  />
                  <Text style={style.cardText}>Main card</Text>
                  <View style={style.cardNumber}>
                    <Text style={style.cardNo}>{item}</Text>
                  </View>
                </View>
              )
            })
          }
        </View>
      </View>
      <FlatList data={[1, 2, 3, 4, 5, 6, 7, 8]} renderItem={({ item, index }) => {
        return (
          <View style={style.card}>
            <View style={style.child}>
              <Text style={{color:"red"}}>{index + 1}</Text>
              <Image
                source={require('@/assets/images/test-3.jpg')}
                resizeMode='cover'
                style={style.cardImage}
              />
              <Text style={style.cardTitle}>hello world</Text>
            </View>
            <View >
              <Text style={style.title}>190,000</Text>
            </View>

          </View>
        )
      }} />
    </View>
  )
}

const style = StyleSheet.create({
  mainContianer: {
    flex: 1,
    backgroundColor: "pink"
  },
  topContainer: {
    backgroundColor: "green",
    paddingTop: 20,
    padding: 20,
    borderBottomEndRadius: 40,
    borderBottomLeftRadius: 40

  },
  cardContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10
  },
  mainContianerText: {
    textAlign: "center",
    color: "white",
    fontSize: 18
  },
  cardNumber: {
    backgroundColor: "yellow",
    width: 40,
    height: 40,
    borderRadius: 30,
    justifyContent: "center",
    position: "absolute",
    bottom: -17,

  },
  cardNo: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold"
  },

  mainContainerCard: {
    backgroundColor: "gray",
    padding: 10,
    alignItems: "center",
    borderRadius: 20,
    height: 130
  },
  mainContainerCardImage: {
    width: 70,
    height: 70,
    borderRadius: 50
  },
  cardText: {
    color: "white",
    fontSize: 16
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginTop:10
  },

  cardImage: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  cardTitle: {
    // textAlign: "center"
    color:"green",
    fontSize:16,
    fontWeight:"bold",
    textTransform:"capitalize",

  },
  child: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20
  },
  title: {
    color: "orangered",
    fontSize:15,
    fontWeight:"bold"
  }


})


export default Home