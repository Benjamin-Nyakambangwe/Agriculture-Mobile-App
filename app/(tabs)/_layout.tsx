import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import {
  Pressable,
  useColorScheme,
  View,
  Platform,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextInput, Button, Text, Searchbar } from "react-native-paper";

import Colors from "../../constants/Colors";
const profileImage = require("../../assets/images/kemal.jpg");
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      {/* <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      /> */}
      <Tabs.Screen
        name="index"
        options={{
          headerShown: true,
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
}
