import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import HomeScreen from './src/screens/HomeScreen';

const Cont = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  padding: 10px;
  padding-top: 40px;
`;

export default function App() {

  return (
    <Cont>
      <HomeScreen />
      <StatusBar style="auto" />
    </Cont>
  );
}
