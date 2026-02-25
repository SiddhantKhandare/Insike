import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import StoryItem from "./StoryItem";
import { dummyStories } from "../../data/dummyStories";

const StoryList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={dummyStories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <StoryItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default StoryList;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: "#ddd",
  },
});