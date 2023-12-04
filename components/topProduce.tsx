import React from "react";
import { View, FlatList, StyleSheet, Image } from "react-native";
import { Avatar, Card, Text } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";

// Replace this with your actual data type
type FarmItem = {
  id: number;
  name: string;
  image: string;
  farm: {
    name: string;
    logo: string;
  };
};

const myImage = require("../assets/images/farm-logo.jpg");

const LeftContent = (props: any) => <Avatar.Icon {...props} icon="folder" />;

const cardWidth = 250;

const TopFarms = ({ data }: { data: FarmItem[] }) => {
  const router = useRouter();

  const renderItem = ({ item }: { item: FarmItem }) => (
    <TouchableOpacity
      onPress={() => router.push(`/produce-details/${item.id}`)}
    >
      <Card style={styles.card}>
        <Card.Cover source={{ uri: `http://10.0.2.2:8000${item.image}` }} />

        <Card.Content style={styles.cardContent}>
          <View style={styles.innerContainer}>
            <View style={styles.leftContent}>
              {/* <LeftContent /> */}
              <Image
                source={{ uri: `http://10.0.2.2:8000${item.farm.logo}` }}
                resizeMode="cover"
                style={{
                  width: 45,
                  height: 45,
                  borderRadius: 50,
                  marginLeft: -15,
                }}
              />
            </View>
            <View style={styles.rightContent}>
              <Text variant="titleMedium" style={{ color: "white" }}>
                {item.name}
              </Text>
              <Text variant="titleSmall" style={{ color: "white" }}>
                {item.farm.name}
              </Text>
            </View>
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={{ marginTop: 15 }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        // keyExtractor={(item) => item.id.toString()}
        snapToInterval={cardWidth + 12}
        contentContainerStyle={{ paddingHorizontal: 12 }}
        initialNumToRender={1.25}
        // horizontal // Add this line if you want the FlatList to be horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    marginBottom: 120,
    height: 100,
  },
  cardContent: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    justifyContent: "space-between",
    height: "100%",
  },
  leftContent: {
    marginRight: 2,
    flex: 1,
  },
  rightContent: {
    flex: 3,
    color: "white",
  },
});

export default TopFarms;
