import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, Image, View, FlatList, ActivityIndicator } from "react-native";
import { getPhotos } from "./src/api/photos.api";
import { useEffect, useState } from "react";
import styled from "styled-components/native";

const Cont = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const PostImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  margin-top: 5px;
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
        setPhotos(data);
      } catch (err) {
        Alert.alert("Error", "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };
    fetchPhotos();
  }, []);

  if (isLoading) {
    return (
      <Cont>
        <ActivityIndicator size="large" />
        <Text>Loading...</Text>
      </Cont>
    );
  }

  return (
    <Cont>
      <Text>Open up App.js to start working on your app!</Text>
      <FlatList
        data={photos}
        renderItem={({ item }) => (
          <PostImage source={{ uri: item.urls.raw }} />
        )}
      />
      <StatusBar style="auto" />
    </Cont>
  );
}
