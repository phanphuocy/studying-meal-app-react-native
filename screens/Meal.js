import React, { useCallback } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../store/actions/meals";
import Colors from "../constants/Colors";

const MealScreen = ({ route }) => {
  const paramsId = route.params.id;

  const meals = useSelector((state) => state.meals.meals);
  const selected = meals.find((meal) => meal.id == paramsId);

  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);

  const {
    id,
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
    ingredients,
    steps,
  } = selected;

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(
    (id) => {
      dispatch(toggleFavorite(id));
    },
    [dispatch, id]
  );

  return (
    <ScrollView>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={[styles.row, styles.smallPadding]}>
        <Text style={styles.detailText}>{duration} mins</Text>
        <View style={styles.vrule}></View>
        <Text style={styles.detailText}>{complexity.toUpperCase()}</Text>
        <View style={styles.vrule}></View>
        <Text style={styles.detailText}>{affordability.toUpperCase()}</Text>
      </View>
      <View style={styles.actionWrap}>
        <Button
          title={
            favoriteMeals.find((meal) => meal.id == selected.id)
              ? "Remove from Favorite"
              : "Add to Favorite"
          }
          color={Colors.primaryColor}
          onPress={() => toggleFavoriteHandler(id)}
        />
      </View>
      <Title>Ingredients</Title>
      {ingredients.map((line) => (
        <Text key={line} style={[styles.text]}>
          {line}
        </Text>
      ))}
      <Title>Steps</Title>
      {steps.map((line) => (
        <Text key={line} style={[styles.text]}>
          {line}
        </Text>
      ))}
    </ScrollView>
  );
};

const Title = ({ children }) => (
  <Text style={styles.headerText}>{children}</Text>
);

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  smallPadding: {
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  vrule: {
    width: 1,
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  detailText: {
    fontFamily: "open-sans-bold",
    color: "#333",
  },
  headerText: {
    fontFamily: "open-sans-bold",
    fontSize: 28,
    color: "darkgrey",
    textAlign: "center",
    marginVertical: 16,
  },
  text: {
    fontFamily: "open-sans",
    fontSize: 18,
    borderColor: "rgba(0,0,0,0.05)",
    borderWidth: 1,
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 8,
    marginBottom: 4,
  },
  actionWrap: {
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
});

export default MealScreen;
