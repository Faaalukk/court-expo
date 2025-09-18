import { StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";
import { store } from "./store";
import React from "react";
import { Provider } from "react-redux";

const RootLayout = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#ddd" },
          headerTintColor: "#333",
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="about" options={{ title: "About" }} />
        <Stack.Screen name="contract" options={{ title: "Contract" }} />
      </Stack>
    </Provider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
