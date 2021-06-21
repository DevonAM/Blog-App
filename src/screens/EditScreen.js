import React, { useContext, useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";
const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const blogPost = state.find((post) => post.id === navigation.getParam("id"));

  return <BlogPostForm />;
};

const styles = StyleSheet.create({});

export default EditScreen;
