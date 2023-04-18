import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const productForm = ({ getProducts }) => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    photo:
      "https://res.cloudinary.com/learncloud/image/upload/v1681101717/avatar_kumh14.png",
    numOfRatings: 250,
    rating: 4.5,
  });

  const submitData = () => {
    console.log(form);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(form),
    };

    fetch("http://10.0.2.2:3001/products", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setForm({
          name: "",
          price: "",
          description: "",
          photo:
            "https://res.cloudinary.com/learncloud/image/upload/v1681101717/avatar_kumh14.png",
          numOfRatings: 250,
          rating: 4.5,
        });
        console.log(result);
        getProducts();
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>Product Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the product name"
          value={form.name}
          onChangeText={(val) => setForm({ ...form, name: val })}
        />
      </View>
      <View>
        <Text>Product Price</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the product price"
          value={form.price}
          onChangeText={(val) => setForm({ ...form, price: val })}
        />
      </View>
      <View>
        <Text>Product Description</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the product description"
          value={form.description}
          onChangeText={(val) => setForm({ ...form, description: val })}
        />
      </View>
      <Button title="Submit" onPress={() => submitData()} />
    </View>
  );
};

export default productForm;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 80,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#fff",
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
  },
});
