import React from "react";
import { FlatList, Image, View } from "react-native";

const HorizontalList = ({ dataList }: { dataList: Array<any> }) => {
  return (
    <FlatList
      className="w-full"
      horizontal
      data={dataList}
      ItemSeparatorComponent={() => <View className="h-28 w-2 bg-[#000000]" />}
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
  );
};

export default HorizontalList;
