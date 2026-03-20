import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import Video from "react-native-video";
import Icon from "react-native-vector-icons/Ionicons";

const ReelItem = ({ item, isActive }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [liked, setLiked] = useState(false);

  const lastTap = useRef(null);

  // Heart animation
  const scale = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  const animateHeart = () => {
    scale.setValue(0);
    opacity.setValue(1);

    Animated.sequence([
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleTap = () => {
    const now = Date.now();

    // DOUBLE TAP
    if (lastTap.current && now - lastTap.current < 300) {
      if (!liked) setLiked(true);
      animateHeart();
    } else {
      // SINGLE TAP → pause/play
      setIsPaused((prev) => !prev);
    }

    lastTap.current = now;
  };

  return (
    <TouchableOpacity activeOpacity={1} onPress={handleTap} style={styles.container}>
      
      {/* VIDEO */}
      <Video
        source={{ uri: item.video }}
        style={styles.video}
        resizeMode="cover"
        repeat
        paused={!isActive || isPaused} // 🔥 control play/pause
      />

      {/* HEART ANIMATION */}
      <Animated.View
        style={[
          styles.heartContainer,
          {
            transform: [{ scale }],
            opacity,
          },
        ]}
      >
        <Icon name="heart" size={100} color="#fff" />
      </Animated.View>

      {/* BOTTOM LEFT */}
      <View style={styles.bottomLeft}>
        <View style={styles.userRow}>
          <Image
            source={{ uri: "https://i.pravatar.cc/150?img=12" }}
            style={styles.profile}
          />
          <Text style={styles.username}>{item.username}</Text>
        </View>

        <Text style={styles.caption}>{item.caption}</Text>
      </View>

      {/* RIGHT ACTIONS */}
      <View style={styles.rightActions}>
        
        <TouchableOpacity style={styles.actionItem} onPress={() => setLiked(!liked)}>
          <Icon
            name={liked ? "heart" : "heart-outline"}
            size={28}
            color={liked ? "red" : "#fff"}
          />
          <Text style={styles.actionText}>245K</Text>
        </TouchableOpacity>

        <View style={styles.actionItem}>
          <Icon name="chatbubble-outline" size={26} color="#fff" />
          <Text style={styles.actionText}>1.2K</Text>
        </View>

        <View style={styles.actionItem}>
          <Icon name="paper-plane-outline" size={26} color="#fff" />
        </View>

        <View style={styles.actionItem}>
          <Icon name="bookmark-outline" size={26} color="#fff" />
        </View>

      </View>

    </TouchableOpacity>
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

  heartContainer: {
    position: "absolute",
    top: "40%",
    left: "40%",
  },

  bottomLeft: {
    position: "absolute",
    bottom: 40,
    left: 15,
  },

  userRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },

  profile: {
    width: 35,
    height: 35,
    borderRadius: 20,
    marginRight: 10,
  },

  username: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },

  caption: {
    color: "#fff",
    maxWidth: 250,
  },

  rightActions: {
    position: "absolute",
    right: 15,
    bottom: 100,
    alignItems: "center",
  },

  actionItem: {
    alignItems: "center",
    marginBottom: 18,
  },

  actionText: {
    color: "#fff",
    fontSize: 12,
    marginTop: 4,
  },
});
