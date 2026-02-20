import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screens/home/HomeScreen";
import SearchScreen from "../screens/search/SearchScreen";
import ReelsScreen from "../screens/reels/ReelsScreen";
import ActivityScreen from "../screens/activity/ActivityScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === "Home")
            iconName = focused ? "home" : "home-outline";
          if (route.name === "Search")
            iconName = focused ? "search" : "search-outline";
          if (route.name === "Reels")
            iconName = focused ? "play-circle" : "play-circle-outline";
          if (route.name === "Activity")
            iconName = focused ? "heart" : "heart-outline";
          if (route.name === "Profile")
            iconName = focused ? "person" : "person-outline";

          return <Icon name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#999",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Reels" component={ReelsScreen} />
      <Tab.Screen name="Activity" component={ActivityScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
