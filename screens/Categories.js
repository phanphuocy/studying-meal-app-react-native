import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  FlatList,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";

const GridItem = ({ item, onPress }) => {
  let TouchableComp = TouchableOpacity;
  if (Platform.OS == "android" && Platform.Version >= 21) {
    TouchableComp = TouchableNativeFeedback;
  }

  return (
    <View style={[styles.gridItem]}>
      <TouchableComp
        onPress={onPress}
        style={{ flex: 1, width: "100%", height: "100%" }}
      >
        <View style={styles.insideTouch}>
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>
        </View>
      </TouchableComp>
    </View>
  );
};

const FilterBar = ({ filtered }) => {
  return (
    <View>
      <TouchableOpacity style={filterBarStyle.wrap}>
        <Text>Filters</Text>
      </TouchableOpacity>
    </View>
  );
};

const filterBarStyle = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const CategoriesScreen = ({ route, navigation }) => {
  let hasFiltersApplied = false;
  if (route.params && route.params.filters) {
    hasFiltersApplied = true;
  }

  function onCategoryPressed(id, title) {
    navigation.navigate("Category", { id: id, title: title });
  }

  return (
    <View style={styles.screen}>
      <FlatList
        style={styles.grid}
        data={CATEGORIES}
        renderItem={({ item }) => (
          <GridItem
            item={item}
            onPress={() => onCategoryPressed(item.id, item.title)}
          />
        )}
        // ItemSeparatorComponent={<SeparatorBetweenItems />}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primaryColor,
  },
  grid: {
    width: "100%",
    padding: 8,
  },
  gridItem: {
    flex: 1,
    backgroundColor: "white",
    height: 150,
    width: "100%",
    marginHorizontal: 6,
    marginVertical: 7,
    borderRadius: 4,
    overflow: "hidden",
    elevation: 3,
  },
  insideTouch: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    height: "100%",
    width: "100%",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "#2e2417",
  },
  separator: {
    height: 4,
    width: 8,
  },
});

export default CategoriesScreen;
