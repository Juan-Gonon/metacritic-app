/* eslint-disable prettier/prettier */
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { View, ActivityIndicator, FlatList, Pressable } from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard } from "./GameCard";
import { MyLogo } from "./Logo";
import { CircleInfoIcon } from "./Icons";

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
        <Link asChild href={'/about'} className="text-blue-400 text-xl">
        <Pressable>
          {/* <FontAwesome5 name="home" size={24} color="white" /> */}
          <CircleInfoIcon />
        </Pressable>
        </Link>
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

