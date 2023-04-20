import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// importing all screens
import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
import ProductListing from "../screens/ProductListing";
import ProductSingle from "../screens/ProductSingle";

const AppNav = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="ProductListing" component={ProductListing} />
        <Stack.Screen name="ProductSingle" component={ProductSingle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNav;

const styles = StyleSheet.create({});
