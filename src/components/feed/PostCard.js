import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const PostCard = ({ post }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: post.profilePic }} style={styles.profilePic} />
        <Text style={styles.username}>{post.username}</Text>
      </View>

      {/* Post Image */}
      <Image source={{ uri: post.postImage }} style={styles.postImage} />

      {/* Actions */}
      <View style={styles.actions}>
        <Text style={styles.likes}>{post.likes} likes</Text>
      </View>

      {/* Caption */}
      <Text style={styles.caption}>
        <Text style={{ fontWeight: "bold" }}>{post.username} </Text>
        {post.caption}
      </Text>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  profilePic: {
    width: 35,
    height: 35,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: "bold",
  },
  postImage: {
    width: "100%",
    height: 400,
  },
  actions: {
    padding: 10,
  },
  likes: {
    fontWeight: "bold",
  },
  caption: {
    paddingHorizontal: 10,
  },
});