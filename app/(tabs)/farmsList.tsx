import { View, Text, Image } from "react-native";
import React from "react";
const myImage = require("../../assets/adaptive-icon.png");

const Page = () => {
  return (
    <View>
      <Text>Farms List</Text>

      <Image
        source={myImage}
        // style={styles.paginationImage}
        resizeMode="cover"
        style={{ width: 300, height: 300 }}
      />
    </View>
  );
};

export default Page;
