import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const { width, height } = Dimensions.get("window");

const StoryViewerScreen = ({ route, navigation }) => {
  const { stories, index } = route.params;

  const [currentIndex, setCurrentIndex] = useState(index);

  const currentStory = stories[currentIndex];

  // Auto next story
  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex < stories.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      navigation.goBack();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <View style={styles.container}>
      
      {/* Story Image */}
      <Image source={{ uri: currentStory.image }} style={styles.image} />

      {/* Close Button */}
      <TouchableOpacity style={styles.close} onPress={() => navigation.goBack()}>
        <Icon name="close" size={30} color="#fff" />
      </TouchableOpacity>

      {/* Left Tap */}
      <TouchableOpacity style={styles.left} onPress={handlePrev} />

      {/* Right Tap */}
      <TouchableOpacity style={styles.right} onPress={handleNext} />

    </View>
  );
};

export default StoryViewerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  image: {
    width,
    height,
    resizeMode: "cover",
  },

  close: {
    position: "absolute",
    top: 40,
    right: 20,
  },

  left: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: "40%",
  },

  right: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: "60%",
  },
});
