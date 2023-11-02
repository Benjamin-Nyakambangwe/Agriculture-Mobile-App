import { View, SafeAreaView, StyleSheet, Image } from "react-native";
import React from "react";
import { useRouter, Link } from "expo-router";
import { TextInput, Button, Text } from "react-native-paper";
const myImage = require("../assets/farm-logo.jpg");

const Page = () => {
  const router = useRouter();
  const [text, setText] = React.useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", padding: 5 }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          source={myImage}
          // style={styles.paginationImage}
          resizeMode="cover"
          style={{ marginTop: -18, width: 300, height: 300 }}
        />
      </View>
      <View
        style={{
          marginBottom: 18,
          marginTop: -20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text variant="headlineMedium" style={{ fontFamily: "Roboto" }}>
          Register
        </Text>
      </View>

      <TextInput
        mode="outlined"
        label="Username"
        placeholder="Type something"
        right={<TextInput.Affix text="/100" />}
        style={{ marginBottom: 15, backgroundColor: "white" }}
        theme={{ colors: { primary: "#4d8b31" } }}
      />
      <TextInput
        mode="outlined"
        label="Email Address"
        placeholder="Type something"
        right={<TextInput.Affix text="/100" />}
        style={{ marginBottom: 15, backgroundColor: "white" }}
        theme={{ colors: { primary: "#4d8b31" } }}
      />
      <TextInput
        mode="outlined"
        label="Password"
        placeholder="Type something"
        right={<TextInput.Affix text="/100" />}
        style={{ marginBottom: 15, backgroundColor: "white" }}
        theme={{ colors: { primary: "#4d8b31" } }}
      />
      <TextInput
        mode="outlined"
        label=" Repeat Password"
        placeholder="Type something"
        right={<TextInput.Affix text="/100" />}
        style={{ marginBottom: 25, backgroundColor: "white" }}
        theme={{ colors: { primary: "#4d8b31" } }}
      />

      <Button
        // icon="send"
        mode="contained"
        onPress={() => router.push("/(tabs)/one")}
        style={{ marginBottom: 8, backgroundColor: "#4d8b31" }}
      >
        Register
      </Button>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 25,
        }}
      >
        <Link href={"/"} asChild>
          <Text variant="bodyMedium">
            If you already have an account{" "}
            <Text style={{ color: "#4d8b31", fontWeight: "bold" }}>log in</Text>{" "}
            here
          </Text>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    height: 300,
    backgroundColor: "#87CEEB",
  },
});
