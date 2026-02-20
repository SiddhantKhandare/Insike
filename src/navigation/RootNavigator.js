import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/splash/SplashScreen";
import BottomTabs from "./BottomTabs";


const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown : false}}>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="MainTabs" component={BottomTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;