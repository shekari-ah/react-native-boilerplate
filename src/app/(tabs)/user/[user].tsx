import { RootLayout } from "@/Providers";
import { Button, H1, Paragraph, YStack } from "tamagui";

import { SafeAreaViewStyled, YStackStyled } from "@/components";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";

export default function App() {
  const router = useRouter();
  const { user } = useLocalSearchParams();
  return (
    <RootLayout>
      <SafeAreaViewStyled edges={["top", "bottom"]}>
        <YStackStyled>
          <YStack maxWidth={400} alignSelf="center">
            <H1 textAlign="center">Welcome to {user} Page.</H1>
            <Paragraph textAlign="center">
              Here's a basic page to show as a user.
            </Paragraph>

            <Button onPress={() => router.back()}>Go back Home</Button>
          </YStack>
        </YStackStyled>
      </SafeAreaViewStyled>
    </RootLayout>
  );
}
