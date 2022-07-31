import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
  Pressable
} from "react-native";
import React, { useState } from "react";

export default function TodoApp() {
  const [goal, setGoal] = useState("");
  const [goalList, setGoalList] = useState([]);

  const goalChangeHandler = (value) => {
    setGoal(value);
  };
  const addGoalhandler = () => {
    setGoalList((state) => [...state, goal]);
    setGoal("");
  };
  const goalItemPressHandler = (goal) => {
    let goals = goalList.filter((v)=> v !== goal)
    setGoalList(goals);
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Todo"
          onChangeText={goalChangeHandler}
          value={goal}
        />
        <Button title="Add Goal" onPress={addGoalhandler} />
      </View>
      <View style={styles.goalListContainer}>
        <FlatList
          data={goalList}
          renderItem={(v) => {
            return (
              <Pressable android_ripple={true} onPress={()=>goalItemPressHandler(v.item)}>
                <Text style={styles.goalListMapText}>{v.item}</Text>
              </Pressable>
            );
          }}
          keyExtractor={(v, k) => k.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    marginTop: 50,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  textInput: {
    flex: 1,
    margin: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 5,
    fontSize: 20,
  },
  goalListContainer: {
    flex: 4,
    padding: 20,
  },
  goalListheader: {
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center",
  },
  goalListMapText: {
    backgroundColor: "red",
    borderRadius: 20,
    padding: 12,
    margin: 12,
    color: "white",
    // borderWidth:2
  },
});
