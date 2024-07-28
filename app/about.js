import { Link } from "expo-router";
import { ScrollView, Text } from "react-native";

export default function about() {
  return (
    <ScrollView>
      <Link href={"/"} className="text-blue-400 text-xl mt-24 ">
        Ir al Home
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
