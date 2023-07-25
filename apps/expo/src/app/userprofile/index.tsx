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
          <Text className="text-xs font-normal text-white">
            Bio corto del usuario.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Index;
