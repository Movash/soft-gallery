import {
  Alert,
  Text,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { getPhotos } from "../api/photos.api";
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

export default function HomeScreen({navigation}) {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  useEffect(() => {
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
    <>
      <Text>Open up App.js to start working on your app!</Text>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPhotos} />
        }
        data={photos}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("FullPhoto", {id: item.id, title: item.title})}>
            <PostImage source={{ uri: item.urls.raw }} />
          </TouchableOpacity>
        )}
      />
    </>
  );
}
