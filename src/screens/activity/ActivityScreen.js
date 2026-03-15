import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { dummyActivity } from "../../data/dummyActivity";
import ActivityItem from "../../components/activity/ActivityItem";

const ActivityScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={dummyActivity}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ActivityItem item={item} />}
      />
    </View>
  );
};

export default ActivityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
