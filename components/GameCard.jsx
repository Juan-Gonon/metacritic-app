import { useEffect, useRef } from "react";
import { View, StyleSheet, Image, Text, Animated } from "react-native";

export function GameCard({ game }) {
  return (
    <View
      key={game.slug}
      className="bg-slate-500/10 rounded-xl gap-4 mb-10 flex-row "
    >
      <Image source={{ uri: game.image }} style={styles.image} />
      <View>
        <Text style={styles.title}>{game.title}</Text>
        <Text className="mb-1" style={styles.score}>
          {game.score}
        </Text>
        <Text className="mt-2 flex-shrink-0 " style={styles.description}>
          {game.description.slice(0, 100)}
        </Text>
      </View>
    </View>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 200,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 42,
  },

  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    color: "#fff",
  },
  description: {
    fontSize: 16,
    color: "#eee",
  },
  score: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10,
  },
});
