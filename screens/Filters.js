import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, Button } from "react-native";
import Colors from "../constants/Colors";

const FiltersScreen = ({ navigation }) => {
  const [filters, setFilters] = useState({
    isGlutenFree: false,
    isLactoseFree: false,
    isVegan: false,
    isVegetarian: false,
  });

  function onOptionSwitched(name, value) {
    setFilters({
      ...filters,
      [name]: value,
    });
  }

  function onCommit() {
    navigation.navigate("Categories", { filters });
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.promptText}>Let's filter it out</Text>
      <FilterOption
        label="Gluten-free"
        name="isGlutenFree"
        value={filters["isGlutenFree"]}
        onSwitch={onOptionSwitched}
      />
      <FilterOption
        label="Lactose-free"
        name="isLactoseFree"
        value={filters["isLactoseFree"]}
        onSwitch={onOptionSwitched}
      />
      <FilterOption
        label="Vegan"
        name="isVegan"
        value={filters["isVegan"]}
        onSwitch={onOptionSwitched}
      />
      <FilterOption
        label="Vegetarian"
        name="isVegetarian"
        value={filters["isVegetarian"]}
        onSwitch={onOptionSwitched}
      />
      <View style={styles.commitBtnWrap}>
        <Button
          style={styles.commitBtn}
          color={Colors.primaryColor}
          title="Apply filters"
          onPress={onCommit}
        />
      </View>
    </View>
  );
};

const FilterOption = ({
  label = "//empty",
  name,
  onSwitch = () => console.log("Fn"),
}) => {
  const [bool, setBool] = useState(false);

  function handleValueChange(newVal) {
    setBool(newVal);
    onSwitch(name, newVal);
  }

  return (
    <View style={styles.option}>
      <Text style={styles.optionText}>{label}</Text>
      <Switch
        trackColor={{ true: "lightyellow", false: "lightgray" }}
        thumbColor={Colors.primaryColor}
        value={bool}
        onValueChange={(newVal) => handleValueChange(newVal)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 24,
  },
  promptText: {
    color: "darkgray",
    fontFamily: "open-sans",
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingVertical: 8,
    paddingRight: 8,
    borderBottomColor: "rgba(0,0,0,0.05)",
    borderBottomWidth: 2,
  },
  optionText: {
    fontSize: 36,
    fontFamily: "open-sans",
  },
  commitBtnWrap: {
    marginVertical: 16,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  commitBtn: {
    textAlign: "center",
    width: "100%",
  },
});

export default FiltersScreen;
