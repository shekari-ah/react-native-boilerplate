import type { tamaguiConfig } from "@/theme/tamagui.config";

type Conf = typeof tamaguiConfig;

declare module "@tamagui/core" {
  interface TamaguiCustomConfig extends Conf {}
}
