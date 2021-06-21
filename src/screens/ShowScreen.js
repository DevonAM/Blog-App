import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useContext } from "react/cjs/react.development";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find((post) => post.id === navigation.getParam("id"));
  return (
    <Text>
      {blogPost.title} - {blogPost.content}
    </Text>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <Feather name="edit" size={30} />
      </TouchableOpacity>
    ),
  };
};

export default ShowScreen;
