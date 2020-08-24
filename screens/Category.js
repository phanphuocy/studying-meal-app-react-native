import React from "react";
import List from "../components/List";
import { useSelector } from "react-redux";

const CategoryScreen = ({ navigation, route }) => {
  const { id } = route.params;
  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryId.indexOf(id) >= 0
  );

  function onMealItemPressed(id, title) {
    navigation.navigate("Meal", { id, title });
  }

  return <List data={displayedMeals} onMealItemPressed={onMealItemPressed} />;
};

export default CategoryScreen;
