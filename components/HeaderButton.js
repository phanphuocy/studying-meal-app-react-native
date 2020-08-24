import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { View, Text, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";

const CustomHeaderButton = (props) => {
  return (
    <Button
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Colors.primaryColor}
      title={props.title || ""}
    />
  );
};

export default CustomHeaderButton;
