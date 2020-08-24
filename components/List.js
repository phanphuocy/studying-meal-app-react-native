import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";

const List = ({ data, onMealItemPressed }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.helperText}>Choose your next recipe</Text>
      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealItem
            item={item}
            onPress={() => onMealItemPressed(item.id, item.title)}
          />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  helperText: {
    fontSize: 16,
    fontFamily: "open-sans",
    paddingTop: 24,
    paddingBottom: 36,
  },
  list: {
    width: "100%",
  },
});

export default List;
