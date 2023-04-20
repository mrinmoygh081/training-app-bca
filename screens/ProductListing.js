import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ProductListing = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>ProductListing</Text>
      <Button
        title="Product Details"
        onPress={() => navigation.navigate("ProductSingle")}
      />
    </View>
  );
};

export default ProductListing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
