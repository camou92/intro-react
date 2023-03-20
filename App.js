import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style.js";
import { AgeCounter } from "./components/AgeCounter/AgeCounter.jsx";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          {/* <Text style={{ color: "red", backgroundColor: "black"}}>Salut bryant</Text> */}
          <AgeCounter />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
