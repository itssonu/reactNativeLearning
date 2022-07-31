import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TodoApp from "../app/TodoApp";
import FoodApp from "../app/FoodApp";

const Drawer = createDrawerNavigator();

function Home() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app sonu! </Text>
    </View>
  );
}
export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="FoodAppStack" component={FoodApp} />
      <Drawer.Screen name="Todo App" component={TodoApp} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });