import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
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
      <Button onPress={() => onSubmit(title, content)} title="Save Blog Post" />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
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
export default BlogPostForm;
