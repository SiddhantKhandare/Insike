import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const CommentItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://i.pravatar.cc/150?img=12" }}
        style={styles.avatar}
      />

      <Text style={styles.commentText}>
        <Text style={styles.username}>{item.username} </Text>
        {item.comment}
      </Text>
    </View>
  );
};

export default CommentItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 12,
    alignItems: "center",
  },

  avatar: {
    width: 35,
    height: 35,
    borderRadius: 20,
    marginRight: 10,
  },

  username: {
    fontWeight: "bold",
  },

  commentText: {
    flex: 1,
  },
});