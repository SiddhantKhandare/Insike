import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Animated,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const { width, height } = Dimensions.get("window");

const StoryViewerScreen = ({ route, navigation }) => {
  const { stories, index } = route.params;

  const [currentIndex, setCurrentIndex] = useState(index);

  const progress = useRef(new Animated.Value(0)).current;

  const currentStory = stories[currentIndex];

  // Animate progress
  useEffect(() => {
    progress.setValue(0);

    Animated.timing(progress, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start(({ finished }) => {
      if (finished) handleNext();
    });
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
      
      {/* STORY IMAGE */}
      <Image source={{ uri: currentStory.image }} style={styles.image} />

      {/* PROGRESS BAR */}
      <View style={styles.progressContainer}>
        {stories.map((_, i) => {
          const widthInterpolated = progress.interpolate({
            inputRange: [0, 1],
            outputRange: ["0%", "100%"],
          });

          return (
            <View key={i} style={styles.progressBarBackground}>
              {i === currentIndex && (
                <Animated.View
                  style={[
                    styles.progressBar,
                    { width: widthInterpolated },
                  ]}
                />
              )}

              {i < currentIndex && (
                <View style={[styles.progressBar, { width: "100%" }]} />
              )}
            </View>
          );
        })}
      </View>

      {/* CLOSE BUTTON */}
      <TouchableOpacity
        style={styles.close}
        onPress={() => navigation.goBack()}
      >
        <Icon name="close" size={30} color="#fff" />
      </TouchableOpacity>

      {/* LEFT TAP */}
      <TouchableOpacity style={styles.left} onPress={handlePrev} />

      {/* RIGHT TAP */}
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

  progressContainer: {
    position: "absolute",
    top: 50,
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 5,
  },

  progressBarBackground: {
    flex: 1,
    height: 3,
    backgroundColor: "rgba(255,255,255,0.3)",
    marginHorizontal: 2,
  },

  progressBar: {
    height: 3,
    backgroundColor: "#fff",
  },

  close: {
    position: "absolute",
    top: 60,
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