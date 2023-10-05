/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";

import HorizontalList from "../../commons/HorizontalList";
//import { MaterialCommunityIcons } from "react-native-vector-icons";
import TitleStack from "../../commons/TitleStack";

const defaultArray = [
  {
    id: 1,
    title: "movie1",
    poster_path: "/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg",
  },
  {
    id: 2,
    title: "movie2",
    poster_path: "/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg",
  },
  {
    id: 3,
    title: "movie3",
    poster_path: "/kdPMUMJzyYAc4roD52qavX0nLIC.jpg",
  },
  {
    id: 4,
    title: "movie4",
    poster_path: "/oUmmY7QWWn7OhKlcPOnirHJpP1F.jpg",
  },
  {
    id: 5,
    title: "movie5",
    poster_path: "/jeyTQrNEpyE1LZIgVlswYh3sc34.jpg",
  },
  {
    id: 6,
    title: "movie6",
    poster_path: "/b0Ej6fnXAP8fK75hlyi2jKqdhHz.jpg",
  },
];

const Index = () => {
  return (
    <SafeAreaView className="bg-[#000000]">
      {/* Changes page title visible on the header */}
      <TitleStack />
      <Image source={require("../../../assets/headerBg.png")} />
      <View className="container flex h-44 w-full flex-row space-x-10 bg-black">
        <Image
          style={{
            resizeMode: "cover",
            height: 100,
            width: 100,
            marginTop: -40,
            borderRadius: 50,
            borderColor: "#433D9F",
            borderWidth: 3,
          }}
          source={require("../../../assets/defaultUserPicture.png")}
        />
        <View className="mt-2 w-1/2 space-y-0.5">
          <Text className="text-sm font-bold text-white">
            NOMBRE DE USUARIO
          </Text>
          <Text className="my-7 text-xs font-normal text-white">
            Bio corto del usuario.
          </Text>
          <View className="-ml-6 flex flex-row">
            <View className="place text mr-5 h-10 w-12">
              <LinearGradient
                className="rounded-t-[15px]"
                colors={["#433D9F", "black"]}
              >
                <View className="mx-auto pt-3">
                  <MIcon color="white" size={22} name="heart-outline" />
                  <Text className="mx-auto text-xs text-white">20</Text>
                </View>
              </LinearGradient>
            </View>
            <View className="place text mr-5 h-10 w-12">
              <LinearGradient
                className="rounded-t-[15px]"
                colors={["#433D9F", "black"]}
              >
                <View className="mx-auto pt-3">
                  <MIcon
                    color="white"
                    size={22}
                    name="account-multiple-outline"
                  />
                  <Text className="mx-auto text-xs text-white">20</Text>
                </View>
              </LinearGradient>
            </View>
            <View className="place text mr-5 h-10 w-12">
              <LinearGradient
                className="rounded-t-[15px]"
                colors={["#433D9F", "black"]}
              >
                <View className="mx-auto pt-3">
                  <MIcon color="white" size={22} name="television" />
                  <Text className="mx-auto text-xs text-white">20</Text>
                </View>
              </LinearGradient>
            </View>
            <View className="place text h-10 w-12">
              <LinearGradient
                className="rounded-t-[15px]"
                colors={["#433D9F", "black"]}
              >
                <View className="mx-auto pt-3">
                  <MIcon color="white" size={22} name="filmstrip" />
                  <Text className="mx-auto text-xs text-white">20</Text>
                </View>
              </LinearGradient>
            </View>
          </View>
        </View>
      </View>
      <View className="container h-full w-full bg-black">
        <Text className="mb-4 pl-4  uppercase text-white">
          PELÍCULAS FAVORITAS
        </Text>
        {defaultArray.length > 0 && <HorizontalList dataList={defaultArray} />}
        <Text className="mb-4 pl-4  uppercase text-white">
          SERIES FAVORITAS
        </Text>
        {defaultArray.length > 0 && <HorizontalList dataList={defaultArray} />}
      </View>
    </SafeAreaView>
  );
};

export default Index;
