import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";

export default function FoodCard(props) {
  return (
    <ImageBackground
      source={{
        uri: props.data.imageUrl,
      }}
    >
      <View style={[styles.card]}>
        <Text style={styles.cardTitle}>{props.data.title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 300,
    alignItems: "center",
    margin: 16,
  },
  cardTitle: {
    fontSize: 30,
    padding: 16,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 200,
    flex: 1,
    //   width:200
  },
});
