import { SafeAreaView as SACSafeAreaView } from "react-native-safe-area-context";
import { styled } from "tamagui";

export const SafeAreaViewStyled = styled(SACSafeAreaView, {
  name: "SafeAreaViewStyled",
  flex: 1,
  backgroundColor: "$backgroundStrong",
});
