import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function CategoryCard(props) {
  return (
    <View style={[styles.card, { backgroundColor: props.item.color }]}>
      <Text style={styles.cardTitle}>{props.item.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex:1,
    width: 150,
    height: 150,
    margin: 16,
    backgroundColor: "red",
  },
  cardTitle: {
    flex:1,
    // color: "#fff",
    // justifyContent: "center",
    // alignItems: "center",
    fontSize:20,
    padding:16,
    fontWeight:'bold',
    justifyContent:'center'
  },
});
