import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { dummyStories } from "../../data/dummyStories";

const StoryItem = ({ item }) => {
  const navigation = useNavigation();

  const isYourStory = item.isYourStory;

  const handlePress = () => {
    navigation.navigate("StoryViewer", {
      stories: dummyStories,
      index: Number(item.id) - 1, // ensure correct index
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      
      {/* YOUR STORY */}
      {isYourStory ? (
        <View style={styles.yourStoryContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />

          <View style={styles.plusIcon}>
            <Icon name="add" size={14} color="#fff" />
          </View>
        </View>
      ) : (
        /* NORMAL STORY */
        <LinearGradient
          colors={["#feda75", "#fa7e1e", "#d62976", "#962fbf", "#4f5bd5"]}
          style={styles.gradientBorder}
        >
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
          </View>
        </LinearGradient>
      )}

      {/* USERNAME */}
      <Text style={styles.username} numberOfLines={1}>
        {item.username}
      </Text>

    </TouchableOpacity>
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

  yourStoryContainer: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },

  plusIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#0095f6",
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  username: {
    fontSize: 12,
    marginTop: 4,
    maxWidth: 70,
    textAlign: "center",
  },
});
