import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

function PostListing({ data }) {
  const styles = StyleSheet.create({
    listItem: {
      padding: 10,
      backgroundColor: "#dddddd",
      marginBottom: 10,
    },
  });

  const [ posts, setPosts ] = useState()

  async function getPosts() {
    const response = await (await fetch("https://jsonplaceholder.typicode.com/photos")).json()
    setPosts(response.slice(0, 100));
  }

  useEffect(() => {
    getPosts();
  }, []);

  if (!posts) {
    return (
      <View>
        <Text>No records found.</Text>
      </View>
    );
  }

  return (
    <View>
      {posts.map((item, index) => {
        return (
          <View style={styles.listItem} key={index}>
            <View><Image style={{ height: 50, width: 50 }} source={{ uri: item.thumbnailUrl }} /></View>
            <View><Text>{item.title}</Text></View>
            
          </View>
        );
      })}
    </View>
  );
}

export default PostListing;
