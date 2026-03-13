import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { dummyProfilePosts } from "../../data/dummyProfilePosts";
import ProfilePostItem from "../../components/profile/ProfilePostItem";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      
      {/* Profile Header */}
      <View style={styles.header}>
        
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=8" }}
          style={styles.profileImage}
        />

        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>54</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>

          <View style={styles.statItem}>
            <Text style={styles.statNumber}>1.2K</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>

          <View style={styles.statItem}>
            <Text style={styles.statNumber}>320</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>

      </View>

      {/* Edit Profile Button */}
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editText}>Edit Profile</Text>
      </TouchableOpacity>

      {/* Posts Grid */}
      <FlatList
        data={dummyProfilePosts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProfilePostItem item={item} />}
        numColumns={3}
        showsVerticalScrollIndicator={false}
      />

    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },

  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },

  stats: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
  },

  statItem: {
    alignItems: "center",
  },

  statNumber: {
    fontWeight: "bold",
    fontSize: 16,
  },

  statLabel: {
    fontSize: 12,
  },

  editButton: {
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingVertical: 6,
    alignItems: "center",
    marginBottom: 10,
  },

  editText: {
    fontWeight: "bold",
  },
});