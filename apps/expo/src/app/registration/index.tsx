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

import TitleStack from "../../commons/TitleStack";
import { LinearGradient } from "expo-linear-gradient";

const Index = () => {
  return (
    <SafeAreaView className="bg-[#000000]">
      {/* Changes page title visible on the header */}
      <TitleStack />
      <ImageBackground
        source={require("../../assets/backgroundPattern.png")}
        resizeMode="cover"
      >
        <Stack.Screen />
        <View className="h-full ">
          <LinearGradient
            className="mb-100 m-4 h-fit rounded-lg px-20 pb-20 pt-20"
            colors={["#77579F", "#67ADC3"]}
          >
            <View>
              <View>
                <Text
                  style={{
                    fontSize: 45,
                    textAlign: "center",
                    margin: 10,
                    color: "white",
                  }}
                >
                  Registro
                </Text>
                <View className="p-2">
                  <Text className="text-center font-semibold italic text-white">
                    Nombre
                  </Text>
                  <TextInput className="rounded-full bg-[#D9D9D9]/25 px-2 text-white"></TextInput>
                </View>
                <View className="p-2">
                  <Text className="text-center font-semibold italic text-white">
                    Email
                  </Text>
                  <TextInput className="rounded-full bg-[#D9D9D9]/25 px-2 text-white"></TextInput>
                </View>
                <View className="p-2">
                  <Text className="text-center font-semibold italic text-white">
                    Contraseña
                  </Text>
                  <TextInput className="rounded-full bg-[#D9D9D9]/25 px-2 text-white"></TextInput>
                </View>
                <View className="p-2">
                  <Text className="text-center font-semibold italic text-white">
                    Fecha de nacimiento
                  </Text>
                  <TextInput className="rounded-full bg-[#D9D9D9]/25 px-2 text-white"></TextInput>
                </View>
                <View className="pt-12">
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#9C9494",
                      borderRadius: 25,
                      alignItems: "center",
                      padding: 5,
                      marginLeft: 60,
                      marginRight: 60,
                      marginBottom: 10,
                    }}
                  >
                    <Text className="text-center  font-bold text-[#332F78]">
                      Listo
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Index;
