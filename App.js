import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, Image, View } from "react-native";
import { getPhotos } from "./src/api/photos.api";
import { useEffect, useState } from "react";
import styled from "styled-components/native";

const Post = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const PostImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;

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
    <Post>
      <Text>Open up App.js to start working on your app!</Text>
      {photos.map((obj) => (
        // <Text key={obj.id}>{obj.slug}</Text>
        <PostImage source={{ uri: obj.urls.raw }} key={obj.id}/>
      ))}
      <StatusBar style="auto" />
    </Post>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
