import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screens/home/HomeScreen";
import SearchScreen from "../screens/search/SearchScreen";
import ReelsScreen from "../screens/reels/ReelsScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          height: 60,
          borderTopWidth: 0.3,
          borderColor: "#ddd",
          backgroundColor: "#fff",
        },

        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === "Home")
            iconName = focused ? "home" : "home-outline";

          else if (route.name === "Search")
            iconName = focused ? "search" : "search-outline";

          else if (route.name === "Reels")
            iconName = focused ? "play-circle" : "play-circle-outline";

          else if (route.name === "Profile")
            iconName = focused ? "person" : "person-outline";

          return <Icon name={iconName} size={24} color={color} />;
        },

        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#999",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />

      <Tab.Screen name="Search" component={SearchScreen} />

      {/* CENTER + BUTTON */}
      <Tab.Screen
        name="Create"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                borderWidth: 2,
                borderColor: "#000",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon name="add" size={20} color={color} />
            </View>
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("CreatePost");
          },
        })}
      />

      <Tab.Screen name="Reels" component={ReelsScreen} />

      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
