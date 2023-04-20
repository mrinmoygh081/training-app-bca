import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  const goTo = () => {
    console.log("hello");
    navigation.navigate("About");
  };
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <View style={styles.mB}>
        <Button title="Go to About" onPress={goTo} />
      </View>
      <Button
        title="Go to Product"
        onPress={() => navigation.navigate("ProductListing")}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mB: {
    paddingBottom: 10,
  },
});
