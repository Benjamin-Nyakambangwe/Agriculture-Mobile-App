import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { TextInput, Button, Text, Searchbar } from "react-native-paper";
import TopFarms from "../../../components/topFarms";
import TopProduce from "../../../components/topProduce";
const profileImage = require("../../../assets/kemal.jpg");

const Page = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", padding: 5 }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "white" },
          headerShadowVisible: false,
          headerLeft: () => <Text variant="titleMedium">Welcome</Text>,
          headerRight: () => (
            <TouchableOpacity style={styles.btnContainer}>
              <Image
                source={profileImage}
                resizeMode="cover"
                style={styles.btnImg}
              />
            </TouchableOpacity>
          ),
          headerTitle: "",
        }}
      />

      <View>
        <Text variant="titleMedium" style={{ paddingLeft: 12 }}>
          Buy and Sell Any Produce
        </Text>
      </View>
      <View style={{ marginTop: 5 }}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{ backgroundColor: "#7fc65f", padding: -6 }}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopFarms />

        <TopProduce />

        {/* <View>
        <Link href={"/"} replace asChild>
          <Button title="Logout" />
        </Link>
        <Link href={"/(tabs)/one/details"} asChild>
          <Button title="Open Detailss" />
        </Link>
        <Link href={"/(tabs)/one/42"} asChild>
          <Button title="Open Details 42" />
        </Link>
        <Link href={"/(tabs)/one/1337"} asChild>
          <Button title="Open Details 1337" />
        </Link>
        <Link href={"/modal"} asChild>
          <Button title="Open Modal" />
        </Link>
      </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Page;

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    borderRadius: 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: {
    width: "100%",
    height: "100%",
    borderRadius: 1.25,
  },
});
