import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Icon name="search-outline" size={18} color="#555" style={styles.icon} />

      <TextInput
        placeholder="Search"
        placeholderTextColor="#777"
        style={styles.input}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#efefef",
    margin: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40,
  },

  icon: {
    marginRight: 6,
  },

  input: {
    flex: 1,
    fontSize: 14,
  },
});