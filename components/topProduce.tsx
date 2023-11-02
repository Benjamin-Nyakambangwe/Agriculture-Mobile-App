import { View, FlatList, StyleSheet, Image } from "react-native";
import React from "react";
import { Avatar, Card, Text } from "react-native-paper";
const myImage = require("../assets/farm-logo.jpg");

type Item = {
  id: number;
};

const LeftContent = (props: any) => <Avatar.Icon {...props} icon="folder" />;

const data: Item[] = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

const cardWidth = 250; // Adjust the card width based on your requirements

const TopFarms = () => {
  const renderItem = ({ item }: { item: Item }) => (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: "https://picsum.photos/id/19/2500/1667" }} />

      <Card.Content style={styles.cardContent}>
        <View style={styles.innerContainer}>
          <View style={styles.leftContent}>
            {/* <LeftContent />
             */}
            <Image
              source={myImage}
              // style={styles.paginationImage}
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
              Tinashe Makoni
            </Text>
            <Text variant="titleMedium" style={{ color: "white" }}>
              Cold Grange Farm
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
        // keyExtractor={(item) => item.id.toString()}
        // horizontal
        snapToInterval={cardWidth + 12} // Snap to one and a half cards (including gap)
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
  //   overlay: {
  //     ...StyleSheet.absoluteFillObject,
  //     backgroundColor: "rgba(0, 0, 0, 0.7)", // Change the opacity here (0.5 means 50% opacity)
  //     height: "40%",
  //     top: 90,
  //   },
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
    height: "100%", // Ensure the inner container takes the full height
  },

  leftContent: {
    marginRight: 2, // Adjust the spacing between left content and right content
    flex: 1,
  },

  rightContent: {
    flex: 3, // Allow the right content to take available space
    color: "white",
  },
});

export default TopFarms;
