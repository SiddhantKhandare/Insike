import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Video from "react-native-video";
import Icon from "react-native-vector-icons/Ionicons";

const ReelItem = ({ item }) => {
  return (
    <View style={styles.container}>
      
      {/* Video */}
      <Video
        source={{ uri: item.video }}
        style={styles.video}
        resizeMode="cover"
        repeat
      />

      {/* Bottom Left Content */}
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

      {/* Right Side Actions */}
      <View style={styles.rightActions}>
        
        <View style={styles.actionItem}>
          <Icon name="heart-outline" size={28} color="#fff" />
          <Text style={styles.actionText}>245K</Text>
        </View>

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

    </View>
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