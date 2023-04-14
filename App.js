import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";

export default function App() {
  const [data, setData] = useState(null);
  console.log(data);

  const getProducts = () => {
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://10.0.2.2:3001/products", requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.allData}>
          {data ? (
            data.map((item, i) => {
              return (
                <View style={styles.singleProduct} key={i}>
                  <View style={styles.inside}>
                    <Image
                      source={{ uri: item.photo, width: "100%", height: 200 }}
                    />
                    <Text> {item.name}</Text>
                    <Text> {item.description}</Text>
                    <Text> {item.price}</Text>
                  </View>
                </View>
              );
            })
          ) : (
            <Text>Loading..</Text>
          )}
        </View>
      </View>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aqua",
    paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 10,
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
  allData: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  singleProduct: {
    width: "50%",
  },
  inside: {
    margin: 5,
  },
});
