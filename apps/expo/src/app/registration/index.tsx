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
      <ImageBackground
        source={require("../../../assets/backgroundPattern.png")}
        resizeMode="cover"
      >
        <View className="container h-full w-full">
          <Text className="text-white">TESTING NEW REGISTRATION</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Index;
