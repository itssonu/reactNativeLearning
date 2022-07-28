import React, { useState } from "react";
import { View } from "react-native";
import Counter from "./screens/Counter";
import FlexDemo from "./screens/FlexDemo";
import TodoApp from "./screens/TodoApp";

const App = () => {
  return (
    <View style={{flex:1}}>
      {/* <Counter /> */}
      {/* <FlexDemo /> */}
      <TodoApp />
    </View>
  );
};

export default App;
