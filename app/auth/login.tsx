import { View, SafeAreaView, StyleSheet, Image } from "react-native";
import React from "react";
import { useRouter, Link } from "expo-router";
import { TextInput, Button, Text } from "react-native-paper";
import { useAuth } from "../context/AuthContext";
const myImage = require("../../assets/images/farm-logo.jpg");

const Page = () => {
  const { onLogin } = useAuth();
  const router = useRouter();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const login = () => {
    // alert("Login first");
    onLogin?.(username, password);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", padding: 5 }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          source={myImage}
          // style={styles.paginationImage}
          resizeMode="cover"
          style={{ marginTop: 8, width: 300, height: 300 }}
        />
      </View>
      <View
        style={{
          marginBottom: 18,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text variant="headlineMedium" style={{ fontFamily: "Roboto" }}>
          Log In
        </Text>
      </View>

      <TextInput
        mode="outlined"
        label="Username"
        placeholder="Type something"
        right={<TextInput.Affix text="/100" />}
        style={{ marginBottom: 15, backgroundColor: "white" }}
        theme={{ colors: { primary: "#4d8b31" } }}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        mode="outlined"
        label="Password"
        secureTextEntry={true}
        placeholder="Type something"
        right={<TextInput.Affix text="/100" />}
        style={{ marginBottom: 25, backgroundColor: "white" }}
        theme={{ colors: { primary: "#4d8b31" } }}
        value={password}
        onChangeText={setPassword}
      />

      <Button
        // icon="send"
        mode="contained"
        onPress={login}
        style={{ marginBottom: 15, backgroundColor: "#4d8b31" }}
      >
        Login
      </Button>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 35,
        }}
      >
        <Link href={"./register"} asChild>
          <Text variant="bodyMedium">
            If you dont have an account{" "}
            <Text style={{ color: "#4d8b31", fontWeight: "bold" }}>
              register
            </Text>{" "}
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
