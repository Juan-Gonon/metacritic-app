import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";
import { Main } from "./components/Main";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import { Logo } from "./components/Logo";
// import { Logo } from "./components/Logo";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {/* <Image
        source={{
          uri: "https://www.metacritic.com/a/img/resize/0bda0288f8c4e8ce62325219bddd79d1daf4f479/catalog/provider/6/3/6-1-939061-13.jpg?auto=webp&fit=cover&height=300&width=200",
        }}
        style={{ width: 200, height: 100, objectFit: "cover" }}
      />
      <Text style={{ color: "#fff" }}>Hola, esto es algo muy bueno </Text> */}
        {/* <Logo /> */}
        <StatusBar style="light" />
        <Main />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.StatusBar,
    paddingHorizontal: 12,
  },
});
