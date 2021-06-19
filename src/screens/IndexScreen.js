import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);

  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <Feather style={styles.icon} name="trash"></Feather>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 25,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderColor: "grey",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
  },
});

export default IndexScreen;
