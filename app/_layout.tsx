import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Login",
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          headerShown: false,
          title: "Register",
        }}
      />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      <Stack.Screen
        name="modal"
        options={{ presentation: "modal", animation: "fade_from_bottom" }}
      />
    </Stack>
  );
};

export default Layout;
