import React from "react";
import { Image, TouchableOpacity } from "react-native";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { Stack, useRouter } from "expo-router";

const TitleStack = ({
  hideBack = false,
  RightButton,
}: {
  hideBack?: boolean;
  RightButton?: () => React.ReactNode | undefined;
}) => {
  const router = useRouter();
  return (
    <Stack.Screen
      options={{
        headerTitleAlign: "center",
        headerTitle: () => (
          <Image source={require("../../assets/Logo-mini.png")} />
        ),
        headerLeft: hideBack
          ? undefined
          : () => (
              <TouchableOpacity onPress={() => router.back()}>
                <MIcon
                  color="white"
                  size={22}
                  name="arrow-left-circle-outline"
                />
              </TouchableOpacity>
            ),
        headerRight: RightButton,
        headerBackVisible: false,
      }}
    />
  );
};

export default TitleStack;
