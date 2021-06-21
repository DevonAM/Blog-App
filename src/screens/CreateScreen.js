import React, { useState, useContext } from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";
import { Context } from "../context/BlogContext";
const CreateScreen = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlogPost } = useContext(Context);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={styles.input}
      />
      <Text style={styles.label}>Content</Text>
      <TextInput
        value={content}
        onChangeText={(text) => setContent(text)}
        style={styles.input}
      />
      <Button
        title="Add Blog Post"
        onPress={() => addBlogPost(title, content)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
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

export default CreateScreen;
