import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  TextInput,
} from "react-native";

import CommentItem from "../../components/comments/CommentItem";
import { dummyComments } from "../../data/dummyComments";

const CommentsScreen = () => {
  return (
    <View style={styles.container}>
      
      <FlatList
        data={dummyComments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CommentItem item={item} />}
      />

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add a comment..."
          style={styles.input}
        />
      </View>

    </View>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  inputContainer: {
    borderTopWidth: 1,
    borderColor: "#ddd",
    padding: 10,
  },

  input: {
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 40,
  },
});