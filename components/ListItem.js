import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const ListItem = ({ item, onPress }) => {
  const { title, duration, complexity, affordability, imageUrl } = item;

  return (
    <View style={itemStyles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={[itemStyles.row]}>
          <ImageBackground
            source={{ uri: imageUrl || "" }}
            style={itemStyles.image}
          >
            <Text style={itemStyles.title}>{title}</Text>
          </ImageBackground>
        </View>
        <View style={[itemStyles.row, itemStyles.smallPadding]}>
          <Text style={itemStyles.detailText}>{duration} mins</Text>
          <View style={itemStyles.vrule}></View>
          <Text style={itemStyles.detailText}>{complexity.toUpperCase()}</Text>
          <View style={itemStyles.vrule}></View>
          <Text style={itemStyles.detailText}>
            {affordability.toUpperCase()}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const itemStyles = StyleSheet.create({
  container: {
    height: 300,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
    height: 240,
    justifyContent: "flex-end",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    color: "white",
    backgroundColor: "rgba(0,0,0,0.2)",
    paddingHorizontal: 24,
    paddingVertical: 16,
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
});

export default ListItem;
