import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { dummyExplore } from "../../data/dummyExplore";
import ExploreItem from "../../components/explore/ExploreItem";
import SearchBar from "../../components/explore/SearchBar";

const SearchScreen = () => {
  return (
    <View style={styles.container}>

      <SearchBar />

      <FlatList
        data={dummyExplore}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ExploreItem item={item} />}
        numColumns={3}
        showsVerticalScrollIndicator={false}
      />

    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});