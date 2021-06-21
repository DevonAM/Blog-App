import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";

const CreateScreen = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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
      <Button title="Add Blog Post" />
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
