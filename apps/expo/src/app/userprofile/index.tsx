/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import {
  Button,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
//import { MaterialCommunityIcons } from "react-native-vector-icons";
import { Stack, useRouter } from "expo-router";

const Index = () => {
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
      <Image source={require("../../../assets/headerBg.png")} />
      <View className="container flex h-full w-full flex-row space-x-10 bg-black">
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
    </SafeAreaView>
  );
};

export default Index;
