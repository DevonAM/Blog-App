import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react/cjs/react.development";
import { Context } from "../context/BlogContext";
const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find((post) => post.id === navigation.getParam("id"));
  return (
    <Text>
      {blogPost.title} - {blogPost.content}
    </Text>
  );
};

export default ShowScreen;
