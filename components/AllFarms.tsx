import React from "react";
import { View, FlatList, StyleSheet, Image, Dimensions } from "react-native";
import { Avatar, Card, Text } from "react-native-paper";

type FarmItem = {
  id: number;
  cover: string;
  logo: string;
  owner: {
    first_name: string;
    last_name: string;
  };
  name: string;
};

const myImage = require("../assets/images/farm-logo.jpg");

type Props = {
  data: FarmItem[];
};

const LeftContent = (props: any) => <Avatar.Icon {...props} icon="folder" />;

const cardWidth = Dimensions.get("window").width;

const TopFarms: React.FC<Props> = ({ data }) => {
  const renderItem = ({ item }: { item: FarmItem }) => (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: `http://10.0.2.2:8000${item.cover}` }} />
      <View style={styles.overlay}>
        <Card.Content style={styles.cardContent}>
          <View style={styles.innerContainer}>
            <View style={styles.leftContent}>
              <Image
                source={{ uri: `http://10.0.2.2:8000${item.logo}` }}
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
              <Text variant="titleSmall" style={{ color: "white" }}>
                {item.owner.first_name} {item.owner.last_name}
              </Text>
              <Text variant="titleMedium" style={{ color: "white" }}>
                {item.name}
              </Text>
            </View>
          </View>
        </Card.Content>
      </View>
    </Card>
  );

  return (
    <View style={{ marginTop: 15, marginBottom: 60 }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        contentContainerStyle={{ paddingHorizontal: 12 }}
        initialNumToRender={1.25}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: cardWidth,
    marginLeft: -12,
    height: 100,
    marginBottom: 115,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    height: "60%",
    top: 140,
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
