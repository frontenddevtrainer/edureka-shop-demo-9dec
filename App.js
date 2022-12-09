import { useEffect } from "react"
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, Platform, ScrollView } from "react-native";
import { AppBar } from "@react-native-material/core";
import PostListing from "./components/post-listing"


export default function App() {



  return (
    <View style={styles.container}>
      <AppBar style={styles.appBar} title={"Edureka Shop"}></AppBar>
      <ScrollView>
        <PostListing />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: { marginTop: Platform.OS === "ios" ? 40 : 0 },
});
