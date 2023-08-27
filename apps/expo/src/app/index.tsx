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
  const router = useRouter();
  return (
    <SafeAreaView className="m-0 bg-[#000000] p-0">
      {/* Changes page title visible on the header */}
      <Stack.Screen
        options={{
          headerTitle: (props) => (
            <View className="container">
              <Image
                className="mx-auto"
                source={require("../../assets/Logo-mini.png")}
              />
            </View>
          ),
        }}
      />
      <ImageBackground
        source={require("../../assets/backgroundPattern.png")}
        resizeMode="cover"
      >
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
                Contraseña
              </Text>
              <TextInput className="rounded-full bg-[#D9D9D9]/25 px-2 text-white"></TextInput>
            </View>
            <View className="m-10">
              <TouchableOpacity
                onPress={() => router.push("/dashboard")}
                style={{
                  backgroundColor: "#CBA7EF",
                  borderRadius: 25,
                  alignItems: "center",
                  padding: 5,
                  marginLeft: 25,
                  marginRight: 25,
                  marginBottom: 10,
                }}
              >
                <Text className="font-bold text-[#332F78]">Listo</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => router.push("/registration")}
                style={{
                  backgroundColor: "#332F78",
                  borderRadius: 25,
                  alignItems: "center",
                  padding: 5,
                  marginLeft: 25,
                  marginRight: 25,
                }}
              >
                <Text className="font-bold text-white">Registro</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Index;
