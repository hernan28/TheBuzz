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

const Index = () => {
  return (
    <SafeAreaView className="bg-[#000000]">
      {/* Changes page title visible on the header */}
      <TitleStack />
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
