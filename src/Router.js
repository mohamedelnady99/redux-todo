
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './Home';
import Details from './Details';

export default function Router() {
    const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: "To-Do List" }} />
        <Stack.Screen name="Details" component={Details} options={{ title: "Details" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
