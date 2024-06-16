import { View } from "react-native";
import styled from "styled-components/native";

const PostImage = styled.Image`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  margin-top: 5px;
`;

const Cont = styled.View`
  padding: 10px;
  padding-top: 40px;
`;

export default function FullPhotoScreen() {
  return (
    <Cont>
      <div>FullPhoto</div>
    </Cont>
  );
};
