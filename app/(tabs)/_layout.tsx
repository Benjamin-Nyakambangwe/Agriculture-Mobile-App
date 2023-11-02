import { View, Text, Platform } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          height: 50,
          elevation: 0,
          // backgroundColor: COLORS.white
        },
      }}
    >
      <Tabs.Screen
        name="one"
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <View
              style={{
                alignItems: "center",
                paddingTop: 16,
                borderTopColor: focused ? "#4d8b31" : "white",
                borderTopWidth: 2,
              }}
            >
              <Ionicons
                name="home"
                size={24}
                color={focused ? "#4d8b31" : "black"}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="produceList"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <View
              style={{
                alignItems: "center",
                paddingTop: 16,
                borderTopColor: focused ? "#4d8b31" : "white",
                borderTopWidth: 2,
              }}
            >
              <Ionicons
                name="basket"
                size={24}
                color={focused ? "#4d8b31" : "black"}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="addProduce"
        options={{
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                // backgroundColor: COLORS.primary,
                width: Platform.OS == "ios" ? 50 : 60,
                height: Platform.OS == "ios" ? 50 : 60,
                top: Platform.OS == "ios" ? -10 : -20,
                borderRadius: Platform.OS == "ios" ? 25 : 30,
              }}
            >
              {/* Add bottom margin here */}
              <Ionicons name="add-circle" size={60} color="#4d8b31" />
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="farmsList"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <View
              style={{
                alignItems: "center",
                paddingTop: 16,
                borderTopColor: focused ? "#4d8b31" : "white",
                borderTopWidth: 2,
              }}
            >
              <Ionicons
                name="business"
                size={24}
                color={focused ? "#4d8b31" : "black"}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <View
              style={{
                alignItems: "center",
                paddingTop: 16,
                borderTopColor: focused ? "#4d8b31" : "white",
                borderTopWidth: 2,
              }}
            >
              <Ionicons
                name="person"
                size={24}
                color={focused ? "#4d8b31" : "black"}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
