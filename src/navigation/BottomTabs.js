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

          else if (route.name === "Search")
            iconName = focused ? "search" : "search-outline";

          else if (route.name === "Reels")
            iconName = focused ? "play-circle" : "play-circle-outline";

          else if (route.name === "Activity")
            iconName = focused ? "heart" : "heart-outline";

          else if (route.name === "Profile")
            iconName = focused ? "person" : "person-outline";

          return <Icon name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#999",
      })}
    >
      {/* 1 */}
      <Tab.Screen name="Home" component={HomeScreen} />

      {/* 2 */}
      <Tab.Screen name="Search" component={SearchScreen} />

      {/* 3 👉 CREATE BUTTON (CENTER) */}
      <Tab.Screen
        name="Create"
        component={HomeScreen} // dummy
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="add-circle-outline" size={30} color={color} />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("CreatePost");
          },
        })}
      />

      {/* 4 */}
      <Tab.Screen name="Reels" component={ReelsScreen} />

      {/* 5 */}
      <Tab.Screen name="Profile" component={ProfileScreen} />

    </Tab.Navigator>
  );
};

export default BottomTabs;
