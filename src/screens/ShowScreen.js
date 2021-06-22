import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useContext } from "react/cjs/react.development";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find((post) => post.id === navigation.getParam("id"));
  return (
    <View>
      <Text style={styles.title}>
        {blogPost.title}
      </Text>  
      <Text style={styles.content}>
        {blogPost.content}
      </Text>
    </View>
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

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    margin: 5,
    fontWeight: 'bold'
  
  },
  content: {
    fontSize: 17,
    marginHorizontal: 5
    
  }
});

export default ShowScreen;
