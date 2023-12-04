import React from "react";
import { View, FlatList, StyleSheet, Image } from "react-native";
import { Avatar, Card, Text } from "react-native-paper";

type ProduceItem = {
  id: number;
  image: string;
  farm: {
    logo: string;
    name: string;
  };
  name: string;
};

const myImage = require("../assets/images/farm-logo.jpg");

type Props = {
  data: ProduceItem[];
};

const LeftContent = (props: any) => <Avatar.Icon {...props} icon="folder" />;

const cardWidth = 250;

const AllProduce: React.FC<Props> = ({ data }) => {
  const renderItem = ({ item }: { item: ProduceItem }) => (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: `http://10.0.2.2:8000${item.image}` }} />

      <Card.Content style={styles.cardContent}>
        <View style={styles.innerContainer}>
          <View style={styles.leftContent}>
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
  );

  return (
    <View style={{ marginTop: 15 }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        snapToInterval={cardWidth + 12}
        contentContainerStyle={{ paddingHorizontal: 12 }}
        initialNumToRender={1.25}
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
    marginRight: 1,
    flex: 1,
  },

  rightContent: {
    flex: 3,
    color: "white",
  },
});

export default AllProduce;
