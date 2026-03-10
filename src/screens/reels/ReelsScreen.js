import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import { dummyReels } from "../../data/dummyReels";
import ReelItem from "../../components/reels/ReelItem";

const { height } = Dimensions.get("window");

const ReelsScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <FlatList
        data={dummyReels}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ReelItem item={item} />}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToInterval={height}
        decelerationRate="fast"
      />
    </View>
  );
};

export default ReelsScreen;