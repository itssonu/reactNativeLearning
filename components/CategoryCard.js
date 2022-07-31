import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';


export default function CategoryCard(props) {
  return (
    <TouchableOpacity onPress={()=>props.onCatCardPressHandler(props.data.id)}>
    <View style={[styles.card, { backgroundColor: props.data.color }]}>
      <Text style={styles.cardTitle}>{props.data.title}</Text>
    </View>
    </TouchableOpacity>
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
