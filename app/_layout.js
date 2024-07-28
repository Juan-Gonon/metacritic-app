import { View } from "react-native";
import { Slot } from "expo-router";

export default function Layout() {
  return (
    <View className=" flex-1 bg-black items-center justify-center ">
      {/* <Text className="text-white">Hola Mundo</Text> */}
      <Slot />
    </View>
  );
}
