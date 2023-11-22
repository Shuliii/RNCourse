import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem({ data, deleteGoalHandler }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#ddd" }}
        onPress={deleteGoalHandler.bind(this, data.item.id)}
        style={({ pressed }) => pressed & styles.pressedItem}
      >
        <Text style={styles.goalItemText}>{data.item.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalItemText: {
    color: "white",
    padding: 8,
  },
});
