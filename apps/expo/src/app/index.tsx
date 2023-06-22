/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import {
  Button,
  Image,
  ImageBackground,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

const Index = () => {
  return (
    <SafeAreaView className="bg-[#000000]">
      {/* Changes page title visible on the header */}
      <Stack.Screen options={{ title: "The Buzz" }} />
      <ImageBackground
        source={require("../../assets/backgroundPattern.png")}
        resizeMode="cover"
      >
        <Stack.Screen />
        <View className="container h-full w-full">
          <View className="h-200 w-200 pt-20">
            <Image
              source={require("../../assets/theBuzzLogo.png")}
              alt="app logo"
              className="mx-auto"
            />
          </View>

          <View className="mx-auto w-full px-20 pt-20">
            <View className="p-2">
              <Text className="text-center font-semibold italic text-white">
                Usuario
              </Text>
              <TextInput className="rounded-full bg-[#D9D9D9]/25 px-2 text-white"></TextInput>
            </View>
            <View className="p-2">
              <Text className="text-center font-semibold italic text-white">
                Contraseña asda
              </Text>
              <TextInput className="rounded-full bg-[#D9D9D9]/25 px-2 text-white"></TextInput>
            </View>
            <View className="pt-15">
              <Button title="Listo" color="#CBA7EF" />
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Index;
