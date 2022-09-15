import { StatusBar } from "react-native";
import { Background } from "./src/components/Background/Index";
import { Home } from "./src/screens/Home/Index";
import { Loading } from "./src/components/Loading/Index";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

export default function App() {
  const [fontsLoader] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoader ? <Home /> : <Loading />}
    </Background>
  );
}
