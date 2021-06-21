import React, { useContext, useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const blogPost = state.find((post) => post.id === navigation.getParam("id"));

  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editting post {blogPost.id}</Text>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Content</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 15,
  },
  label: {
    fontSize: 20,
    marginBottom: 2,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    fontSize: 18,
    marginVertical: 2,
    paddingVertical: 2,
  },
});

export default EditScreen;
