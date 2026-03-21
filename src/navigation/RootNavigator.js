import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/splash/SplashScreen";
import BottomTabs from "./BottomTabs";
import CommentsScreen from "../screens/comments/CommentsScreen";
import CreatePostScreen from "../screens/create/CreatePostScreen";
import StoryViewerScreen from "../screens/story/StoryViewerScreen";



const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown : false}}>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="MainTabs" component={BottomTabs} />
                <Stack.Screen name="Comments" component={CommentsScreen} />
                <Stack.Screen name="CreatePost" component={CreatePostScreen} />
                <Stack.Screen name="StoryViewer" component={StoryViewerScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;