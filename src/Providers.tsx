import { config } from "@/theme/tamagui.config";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { TamaguiProvider } from "@tamagui/core";
import type { PropsWithChildren } from "react";
import React from "react";
import { useColorScheme } from "react-native";

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  const colorScheme = useColorScheme();

  return (
    <TamaguiProvider config={config}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        {children}
      </ThemeProvider>
    </TamaguiProvider>
  );
};
