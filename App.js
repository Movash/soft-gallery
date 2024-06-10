import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, View } from "react-native";
import { getPhotos } from "./src/api/photos.api";
import { useEffect, useState } from "react";

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setIsLoading(true);
        const data = await getPhotos();
        if (!data.length) {
          Alert.alert("Error", "No photos");
          return;
        }
        console.log("data", data);
        setPhotos(data);
      } catch (err) {
        Alert.alert("Error", "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };
    fetchPhotos();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {photos.map((obj) => (
        <Text key={obj.id}>{obj.slug}</Text>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
