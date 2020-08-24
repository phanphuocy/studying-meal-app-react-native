import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HeaderButton from "../components/HeaderButton";
import { Item } from "react-navigation-header-buttons";

/* ---------------------------- Import constants ---------------------------- */
import Colors from "../constants/Colors";

/* ----------------------------- Import screens ----------------------------- */
import CategoriesScreen from "../screens/Categories";
import CategoryScreen from "../screens/Category";
import MealScreen from "../screens/Meal";
import FavoriteMeals from "../screens/FavoriteMeals";

//
// ------------------------------------------
//
const defaultHeaderStyle = {
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
};

//
// ------------------------------------------
//
const MealsStack = createStackNavigator();

const MealsNavigator = () => (
  <MealsStack.Navigator>
    <MealsStack.Screen
      name="Categories"
      component={CategoriesScreen}
      options={{
        ...defaultHeaderStyle,
        title: "Meal Categories",
      }} // this use an object to customize title
    />
    <MealsStack.Screen
      name="Category"
      component={CategoryScreen}
      options={({ route }) => ({
        ...defaultHeaderStyle,
        title: "Category: " + route.params.title,
      })} // this use a function which return a object
    />
    <MealsStack.Screen
      name="Meal"
      component={MealScreen}
      options={({ route }) => ({
        ...defaultHeaderStyle,
        title: route.params.title,
        headerRight: () => (
          <HeaderButton title="Fav">
            <Item title="Fav" />
          </HeaderButton>
        ),
      })} // this use a function which return a object
    />
  </MealsStack.Navigator>
);

//
// ------------------------------------------
//
const FavoriteStack = createStackNavigator();

const FavoriteNavigator = () => (
  <FavoriteStack.Navigator>
    <FavoriteStack.Screen
      name="FavoriteMeals"
      component={FavoriteMeals}
      options={{
        ...defaultHeaderStyle,
        title: "Your Favorites",
      }} // this use an object to customize title
    />
  </FavoriteStack.Navigator>
);

export { MealsNavigator, FavoriteNavigator };
