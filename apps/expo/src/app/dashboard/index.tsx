import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";

import HorizontalList from "../../commons/HorizontalList";
import TitleStack from "../../commons/TitleStack";
import {
  getNowPlayingFromApiAsync,
  getTrendingFromApiAsync,
} from "../../utils/externalApi";

const Index = () => {
  const router = useRouter();
  const [trendingList, setTrendingList] = useState([]);
  const [nowPlayingList, setNowPlayingList] = useState([]);

  useEffect(() => {
    getTrendingFromApiAsync(setTrendingList);
    getNowPlayingFromApiAsync(setNowPlayingList);
  }, []);

  return (
    <SafeAreaView className="bg-[#000000]">
      {/* Cambia el título de la página visible en el encabezado */}
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
          Películas en tendencia
        </Text>
        {trendingList.length > 0 && <HorizontalList dataList={trendingList} />}
        <Text className="mb-4 pl-10 font-bold uppercase text-white">
          Películas ahora en emisión
        </Text>
        {nowPlayingList.length > 0 && (
          <HorizontalList dataList={nowPlayingList} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Index;
