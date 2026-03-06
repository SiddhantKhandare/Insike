import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const StoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      
      <LinearGradient
        colors={["#feda75", "#fa7e1e", "#d62976", "#962fbf", "#4f5bd5"]}
        style={styles.gradientBorder}
      >
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
      </LinearGradient>

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

  gradientBorder: {
    width: 74,
    height: 74,
    borderRadius: 37,
    justifyContent: "center",
    alignItems: "center",
  },

  imageContainer: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 62,
    height: 62,
    borderRadius: 31,
  },

  username: {
    fontSize: 12,
    marginTop: 4,
    maxWidth: 70,
    textAlign: "center",
  },
});