import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const AppHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
       <Text style={styles.logoText}>Insike</Text>
      </View>

      <View style={styles.right}>
        <Icon name="heart-outline" size={24} style={styles.icon} />
        <Icon name="chatbubble-outline" size={24} />
      </View>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    height: 55,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 0.5,
    borderColor: "#ddd",
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoText: {
  fontSize: 22,
  fontWeight: "bold",
},
  icon: {
    marginRight: 15,
  },
});