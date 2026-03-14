import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const PostCard = ({ post }) => {
  const navigation = useNavigation();

  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);

  const lastTap = useRef(null);

  const scale = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  const toggleLike = () => {
    if (liked) {
      setLikesCount((prev) => prev - 1);
    } else {
      setLikesCount((prev) => prev + 1);
    }
    setLiked(!liked);
  };

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

  const handleDoubleTap = () => {
    const now = Date.now();

    if (lastTap.current && now - lastTap.current < 300) {
      if (!liked) {
        setLiked(true);
        setLikesCount((prev) => prev + 1);
      }

      animateHeart();
    }

    lastTap.current = now;
  };

  return (
    <View style={styles.container}>
      {/* Post Header */}
      <View style={styles.header}>
        <Image source={{ uri: post.profilePic }} style={styles.profilePic} />
        <Text style={styles.username}>{post.username}</Text>
      </View>

      {/* Post Image */}
      <TouchableOpacity activeOpacity={1} onPress={handleDoubleTap}>
        <View>
          <Image source={{ uri: post.postImage }} style={styles.postImage} />

          {/* Floating Heart */}
          <Animated.View
            style={[
              styles.heartContainer,
              {
                transform: [{ scale }],
                opacity: opacity,
              },
            ]}
          >
            <Icon name="heart" size={100} color="white" />
          </Animated.View>
        </View>
      </TouchableOpacity>

      {/* Action Row */}
      <View style={styles.actionsRow}>
        <View style={styles.leftActions}>
          <TouchableOpacity onPress={toggleLike}>
            <Icon
              name={liked ? "heart" : "heart-outline"}
              size={26}
              color={liked ? "red" : "black"}
              style={styles.icon}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Comments")}
          >
            <Icon name="chatbubble-outline" size={24} style={styles.icon} />
          </TouchableOpacity>

          <Icon name="paper-plane-outline" size={24} style={styles.icon} />
        </View>

        <Icon name="bookmark-outline" size={24} />
      </View>

      {/* Likes */}
      <Text style={styles.likes}>{likesCount} likes</Text>

      {/* Caption */}
      <Text style={styles.caption}>
        <Text style={styles.username}>{post.username} </Text>
        {post.caption}
      </Text>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: "#fff",
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

  heartContainer: {
    position: "absolute",
    top: "40%",
    left: "40%",
  },

  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 8,
  },

  leftActions: {
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    marginRight: 15,
  },

  likes: {
    fontWeight: "bold",
    paddingHorizontal: 10,
  },

  caption: {
    paddingHorizontal: 10,
    paddingTop: 4,
  },
});
