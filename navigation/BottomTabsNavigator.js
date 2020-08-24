import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MealsNavigator, FavoriteNavigator } from "./Stacks";
import Ionicons from "react-native-vector-icons/Ionicons";
import Colors from "../constants/Colors";
import FilterScreen from "../screens/Filters";

/* ------------------------------ Tab Navigator ----------------------------- */
const Tabs = createBottomTabNavigator();

function getTabBarIcon({ focused, color, size }, route) {
  let iconName;
  if (route.name === "Meals") {
    iconName = "md-restaurant";
  } else if (route.name === "Favorite") {
    iconName = focused ? "md-star" : "md-star-outline";
  }
  return <Ionicons name={iconName} size={size} color={color} />;
}

const BottomTabsNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: (props) => getTabBarIcon(props, route),
      })}
      tabBarOptions={{
        activeTintColor: Colors.primaryColor,
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen name="Meals" component={MealsNavigator} />
      <Tabs.Screen name="Favorite" component={FavoriteNavigator} />
    </Tabs.Navigator>
  );
};

/* ----------------------------- Main Navigator ----------------------------- */
const Drawer = createDrawerNavigator();

const MainNavigator = () => (
  <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Tabs" component={BottomTabsNavigator} />
      <Drawer.Screen name="Filter" component={FilterScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default MainNavigator;
