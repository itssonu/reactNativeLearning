import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        title="Click Click"
        onPress={() => {
          setCounter(counter + 10);
        }}
      />
      <Text style={{ margin: 10, fontSize: 30 }}>{counter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginBottom: 10,
  },
});
