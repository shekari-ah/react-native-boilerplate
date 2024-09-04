import { RootLayout } from "@/Providers";
import { Github, Twitter } from "@tamagui/lucide-icons";
import {
  Button,
  H1,
  ListItem,
  Paragraph,
  Separator,
  YGroup,
  YStack,
} from "tamagui";
import { SafeAreaViewStyled, YStackStyled } from "./components";

export default function App() {
  return (
    <RootLayout>
      <SafeAreaViewStyled edges={["bottom", "top"]}>
        <YStackStyled>
          <YStack maxWidth={600}>
            <H1 textAlign="center">Welcome to Tamagui.</H1>
            <Paragraph textAlign="center">
              Here&apos;s a basic starter to show navigating from one screen to
              another.
            </Paragraph>
          </YStack>

          <YStack gap="$2.5">
            <Button onPress={() => {}}>Go to user page</Button>
            <Button onPress={() => {}}>Go to tabs page</Button>
          </YStack>

          <YStack gap="$5">
            <YGroup bordered theme="green">
              <YGroup.Item>
                <ListItem hoverTheme title="Nate" pressTheme icon={Twitter} />
              </YGroup.Item>
              <Separator />
              <YGroup.Item>
                <ListItem hoverTheme pressTheme title="Tamagui" icon={Github} />
              </YGroup.Item>
              <Separator />
              <YGroup.Item>
                <ListItem hoverTheme pressTheme title="This Template" />
              </YGroup.Item>
            </YGroup>
          </YStack>
        </YStackStyled>
      </SafeAreaViewStyled>
    </RootLayout>
  );
}
