import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const ActivityItem = ({ item }) => {
  const getIcon = () => {
    if (item.type === "like") return "heart";
    if (item.type === "comment") return "chatbubble";
    if (item.type === "follow") return "person-add";
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://i.pravatar.cc/150?img=15" }}
        style={styles.avatar}
      />

      <Text style={styles.text}>
        <Text style={styles.username}>{item.username} </Text>
        {item.text}
      </Text>

      <Icon name={getIcon()} size={22} color="#333" />
    </View>
  );
};

export default ActivityItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 0.5,
    borderColor: "#ddd",
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },

  text: {
    flex: 1,
  },

  username: {
    fontWeight: "bold",
  },
});
