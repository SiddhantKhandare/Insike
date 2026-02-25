import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const StoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.username} numberOfLines={1}>
        {item.username}
      </Text>
    </View>
  );
};

export default StoryItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginHorizontal: 8,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "#ff8501",
  },
  username: {
    fontSize: 12,
    marginTop: 4,
  },
});