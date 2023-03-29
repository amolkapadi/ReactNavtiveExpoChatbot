import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "./Screen/Splash";
import Login from "./Screen/Login";
import Signup from "./Screen/Signup";
import MyChat from "./Screen/MyChat";
import Dashboard from "./Screen/Dashboard"
import Createmeeting from "./Screen/Createmeeting";


const Stack = createStackNavigator();
function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Signup"
          component={Signup}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Dashboard"
          component={Dashboard}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="MyChat"
          component={MyChat}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="CreateMeeting"
          component={Createmeeting}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default AppNavigator;
