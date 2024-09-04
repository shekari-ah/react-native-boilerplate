import { config } from "@/theme/tamagui.config";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, type PropsWithChildren } from "react";
import { useColorScheme } from "react-native";
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import { TamaguiProvider, Theme } from "tamagui";

SplashScreen.preventAutoHideAsync();

export function RootLayout({ children }: PropsWithChildren) {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <TamaguiProvider config={config}>
        <Theme name={colorScheme}>
          <ThemeProvider
            value={colorScheme === "light" ? DefaultTheme : DarkTheme}
          >
            {children}
          </ThemeProvider>
        </Theme>
      </TamaguiProvider>
    </SafeAreaProvider>
  );
}
