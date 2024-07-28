import { Link } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function about() {
  return (
    <ScrollView className="pt-24">
      <Link asChild href={"/"}>
        <Pressable>
          <FontAwesome name="home" size={24} color="white" />
        </Pressable>
      </Link>
      <Text className="text-white font-bold mb-8 text-2xl">
        Sobre el proyecto
      </Text>
      <Text className="text-white text-white/90 mb-4">
        {" "}
        NativeWind uses Tailwind CSS as scripting language to create a universal
        styling system. Styled components can be shared between all React Native
        platforms, using the best style engine for that platform; CSS StyleSheet
        on web and StyleSheet.create for native. It's goals are to provide a
        consistent styling experience across all platforms, improving Developer
        UX, component performance and code maintainability.{" "}
      </Text>
      <Text className="text-white text-white/90 mb-4">
        {" "}
        NativeWind uses Tailwind CSS as scripting language to create a universal
        styling system. Styled components can be shared between all React Native
        platforms, using the best style engine for that platform; CSS StyleSheet
        on web and StyleSheet.create for native. It's goals are to provide a
        consistent styling experience across all platforms, improving Developer
        UX, component performance and code maintainability.{" "}
      </Text>
      <Text className="text-white text-white/90 mb-4">
        {" "}
        NativeWind uses Tailwind CSS as scripting language to create a universal
        styling system. Styled components can be shared between all React Native
        platforms, using the best style engine for that platform; CSS StyleSheet
        on web and StyleSheet.create for native. It's goals are to provide a
        consistent styling experience across all platforms, improving Developer
        UX, component performance and code maintainability.{" "}
      </Text>
      <Text className="text-white text-white/90 mb-4">
        {" "}
        NativeWind uses Tailwind CSS as scripting language to create a universal
        styling system. Styled components can be shared between all React Native
        platforms, using the best style engine for that platform; CSS StyleSheet
        on web and StyleSheet.create for native. It's goals are to provide a
        consistent styling experience across all platforms, improving Developer
        UX, component performance and code maintainability.{" "}
      </Text>
    </ScrollView>
  );
}
