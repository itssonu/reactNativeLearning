import { View, Text } from "react-native";
import React from "react";

export default function FlexDemo() {
  return (
    <View style={{flex:1, marginVertical:50, flexDirection:'row', justifyContent:'space-around'}}>
      <View style={{backgroundColor:'red', height:30, width:30, flex:1}}></View>
      <View style={{backgroundColor:'blue', height:30, width:30}}></View>
      <View style={{backgroundColor:'green', height:30, width:30}}></View>
    </View>
  );
}
