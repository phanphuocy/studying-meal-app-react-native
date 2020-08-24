import React from "react";
import { StyleSheet } from "react-native";
import List from "../components/List";
import { useSelector } from "react-redux";

const FavoriteScreen = ({ navigation }) => {
  const availableMeals = useSelector((state) => state.meals.favoriteMeals);

  function onMealItemPressed(id, title) {
    navigation.navigate("Meal", { id, title });
  }

  return <List data={availableMeals} onMealItemPressed={onMealItemPressed} />;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoriteScreen;
