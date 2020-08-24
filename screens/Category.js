import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import List from "../components/List";

const CategoryScreen = ({ navigation, route }) => {
  let { title, id } = route.params;
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryId.indexOf(id) >= 0
  );

  function onMealItemPressed(id, title) {
    navigation.navigate("Meal", { id, title });
  }

  return <List data={displayedMeals} onMealItemPressed={onMealItemPressed} />;
};

export default CategoryScreen;
