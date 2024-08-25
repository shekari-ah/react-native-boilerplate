import { Providers } from "@/Providers";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { Button, Text, YStack } from "tamagui";

export default function App() {
  return (
    <Providers>
      <StatusBar style="auto" />
      <YStack gap="$4" flex={1} alignItems="center" justifyContent="center">
        <Text theme="blue">Open up App.js to start working on your app!</Text>
        <Button theme="blue">Hello world</Button>
      </YStack>
    </Providers>
  );
}
