import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import { CATEGORIES } from "../dummy-data";
import CategoryCard from "../components/CategoryCard";

export default function FoodApp() {
  return (
    <View style={styles.container}>
      <FlatList data={CATEGORIES} keyExtractor={(v)=>v.id} renderItem={CategoryCard} numColumns={2}   />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
