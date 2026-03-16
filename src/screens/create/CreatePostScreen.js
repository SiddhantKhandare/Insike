import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { launchImageLibrary } from "react-native-image-picker";

const CreatePostScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  const pickImage = () => {
    launchImageLibrary(
      {
        mediaType: "photo",
      },
      (response) => {
        if (response.assets && response.assets.length > 0) {
          setImage(response.assets[0].uri);
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.cancel}>Cancel</Text>
        </TouchableOpacity>

        <Text style={styles.title}>New Post</Text>

        <TouchableOpacity>
          <Text style={styles.share}>Share</Text>
        </TouchableOpacity>
      </View>

      {/* Image Picker */}
      <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Text>Select Image</Text>
        )}
      </TouchableOpacity>

      {/* Caption */}
      <TextInput
        placeholder="Write a caption..."
        value={caption}
        onChangeText={setCaption}
        style={styles.input}
        multiline
      />

    </View>
  );
};

export default CreatePostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 0.5,
    borderColor: "#ddd",
  },

  cancel: {
    color: "#000",
  },

  title: {
    fontWeight: "bold",
  },

  share: {
    color: "#0095f6",
    fontWeight: "bold",
  },

  imageContainer: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  input: {
    padding: 15,
  },
});
