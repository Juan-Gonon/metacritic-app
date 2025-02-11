/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react";
import { View, ActivityIndicator, FlatList } from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard } from "./GameCard";
import { MyLogo } from "./Logo";

export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets()

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <View style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom
    }} >
       <View style={
        {
          marginBottom: 20
        }
       } >
        <MyLogo />
       </View>
     
        {
          games.length === 0
          ? <ActivityIndicator />
          :(
            <FlatList
            data={games}
            keyExtractor={game => game.slug}
            renderItem={({item, index}) =>  <AnimatedGameCard game={item} index={index} />}
            />
          )
        }
     
    </View>
  );
}

