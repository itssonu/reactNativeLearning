import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FoodApp() {
  return (
    <View style={styles.constainer}>
      <View style={styles.card}>
        <Text>FoodApp</Text>
      </View>
      <View style={styles.card}>
        <Text>FoodApp</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
  },
  card: {
    width: 150,
    height: 150,
    margin:16,
    backgroundColor:'red'
  },
});
