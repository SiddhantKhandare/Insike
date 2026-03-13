import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

const ProfilePostItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
    </TouchableOpacity>
  );
};

export default ProfilePostItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 1,
  },

  image: {
    width: "100%",
    height: 120,
  },
});