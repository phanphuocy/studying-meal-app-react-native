import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MealsNavigator, FavoriteNavigator } from "./Stacks";
import Ionicons from "react-native-vector-icons/Ionicons";
import Colors from "../constants/Colors";

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
    <NavigationContainer>
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
    </NavigationContainer>
  );
};

export default BottomTabsNavigator;
