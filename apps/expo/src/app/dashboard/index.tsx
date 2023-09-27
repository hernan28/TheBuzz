import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";

import TitleStack from "../../commons/TitleStack";
import { getTrendingFromApiAsync } from "../../utils/externalApi";

const Index = () => {
  const router = useRouter();
  const [trendingList, setTrendingList] = useState([]);
  useEffect(() => {
    getTrendingFromApiAsync(setTrendingList);
  }, []);
  return (
    <SafeAreaView className="bg-[#000000]">
      {/* Changes page title visible on the header */}
      <TitleStack
        hideBack
        RightButton={() => (
          <TouchableOpacity onPress={() => router.push("/userprofile")}>
            <MIcon color="white" size={22} name="account-outline" />
          </TouchableOpacity>
        )}
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
