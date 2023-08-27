/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

import { getTrendingFromApiAsync } from "../../utils/externalApi";

const Index = () => {
  const [trendingList, setTrendingList] = useState([]);
  useEffect(() => {
    getTrendingFromApiAsync(setTrendingList);
  }, []);
  return (
    <SafeAreaView className="bg-[#000000]">
      {/* Changes page title visible on the header */}
      <Stack.Screen
        options={{
          headerTitle: (props) => (
            <View className="container">
              <Image
                className="mx-auto"
                source={require("../../../assets/Logo-mini.png")}
              />
            </View>
          ),
        }}
      />
      <View className="container h-full w-full">
        <Text className="mb-4 pl-10 font-bold uppercase text-white">
          Popular
        </Text>
        {trendingList.length > 0 && (
          <FlatList
            className="w-full"
            horizontal
            data={trendingList}
            ItemSeparatorComponent={() => (
              <View className="h-28 w-2 bg-[#000000]" />
            )}
            renderItem={({
              item,
            }: {
              item: {
                id: number;
                title: string;
                poster_path: string;
              };
            }) => {
              return (
                <Image
                  className="h-48 w-24 rounded-md"
                  alt={item.title}
                  source={{
                    uri: `https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`,
                  }}
                />
              );
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

// Move Flatlist code to new common file and add new lists for the other endpoints.

export default Index;
