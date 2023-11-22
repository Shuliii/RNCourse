import { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  const addGoalHandler = () => {
    setCourseGoals((prev) => [
      ...prev,
      {
        text: enteredGoalText,
        id: Math.random().toString(),
      },
    ]);
    setEnteredGoalText("");
    endAddGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />

        <GoalInput
          goalInputHandler={goalInputHandler}
          addGoalHandler={addGoalHandler}
          value={enteredGoalText}
          modalIsVisible={modalIsVisible}
          endAddGoalHandler={endAddGoalHandler}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  data={itemData}
                  deleteGoalHandler={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          >
            {/* <Text>List of goals...</Text> */}
          </FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  // inputContainer: {
  //   flex: 1,
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   marginBottom: 24,
  //   borderBottomWidth: 1,
  //   borderColor: "#ccc",
  // },
  // textInput: {
  //   borderWidth: 1,
  //   borderColor: "#ccc",
  //   width: "70%",
  //   marginRight: 8,
  //   padding: 8,
  // },
  goalsContainer: {
    flex: 5,
    // gap: 8,
  },
  // goalItem: {
  //   margin: 8,
  //   borderRadius: 6,
  //   backgroundColor: "#5e0acc",
  //   padding: 8,
  // },
  // goalItemText: {
  //   color: "white",
  // },
});
