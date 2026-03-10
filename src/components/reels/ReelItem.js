import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Video from "react-native-video";

const ReelItem = ({ item }) => {
  return (
    <View style={styles.container}>
      
      <Video
        source={{ uri: item.video }}
        style={styles.video}
        resizeMode="cover"
        repeat
      />

      {/* Overlay Text */}
      <View style={styles.overlay}>
        <Text style={styles.username}>{item.username}</Text>
        <Text style={styles.caption}>{item.caption}</Text>
      </View>

    </View>
  );
};

export default ReelItem;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },

  video: {
    height: "100%",
    width: "100%",
    position: "absolute",
  },

  overlay: {
    position: "absolute",
    bottom: 40,
    left: 15,
  },

  username: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  caption: {
    color: "#fff",
    marginTop: 4,
  },
});