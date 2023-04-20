import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ProductSingle = () => {
  return (
    <View style={styles.container}>
      <Text>ProductSingle</Text>
    </View>
  );
};

export default ProductSingle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
