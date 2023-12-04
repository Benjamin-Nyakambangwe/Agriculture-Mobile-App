import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React, { useEffect } from "react";
import { Link, Stack } from "expo-router";
import { TextInput, Button, Text, Searchbar } from "react-native-paper";
import TopFarms from "../../components/TopFarms";
import AllProduce from "../../components/AllProduce";
const profileImage = require("../../assets/images/kemal.jpg");

const Page = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [produceList, setProduceList] = React.useState([]);

  useEffect(() => {
    const getProduceList = async () => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      const res = await fetch(
        "http://10.0.2.2:8000/api/produces",
        requestOptions
      );
      const data = await res.json();
      console.log(data);
      setProduceList(data);
    };
    getProduceList();
  }, []);

  // const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", padding: 5 }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "white" },
          headerShadowVisible: false,
          headerLeft: () => (
            <Text variant="titleMedium">ALL PRODUCE AVAILABLE</Text>
          ),
          //   headerRight: () => (
          //     <TouchableOpacity style={styles.btnContainer}>
          //       <Image
          //         source={profileImage}
          //         resizeMode="cover"
          //         style={styles.btnImg}
          //       />
          //     </TouchableOpacity>
          //   ),
          headerTitle: "",
        }}
      />

      {/* <View>
        <Text variant="titleMedium" style={{ paddingLeft: 12 }}>
          Buy and Sell Any Produce
        </Text>
      </View> */}
      <View style={{ marginTop: 5 }}>
        <Searchbar
          placeholder="Search"
          // onChangeText={onChangeSearch}
          value={searchQuery}
          style={{ backgroundColor: "#7fc65f", padding: -6 }}
        />
      </View>
      {/* <TopFarms /> */}

      <AllProduce data={produceList} />
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
