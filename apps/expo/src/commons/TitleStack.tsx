import React from "react";
import { Image } from "react-native";
import { Stack } from "expo-router";

const TitleStack = () => (
  <Stack.Screen
    options={{
      headerTitleAlign: "center",
      headerTitle: () => (
        <Image source={require("../../assets/Logo-mini.png")} />
      ),
    }}
  />
);

export default TitleStack;
