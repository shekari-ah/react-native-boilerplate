import { RootLayout } from "@/Providers";
import { Github, Twitter } from "@tamagui/lucide-icons";
import { Link, useRouter } from "expo-router";
import {
  Button,
  H1,
  ListItem,
  Paragraph,
  Separator,
  YGroup,
  YStack,
} from "tamagui";
import { SafeAreaViewStyled, YStackStyled } from "../components";
import * as Linking from "expo-linking";

export default function App() {
  const router = useRouter();
  return (
    <RootLayout>
      <SafeAreaViewStyled edges={["top", "bottom"]}>
        <YStackStyled>
          <YStack maxWidth={400} alignSelf="center">
            <H1 textAlign="center">Welcome to Tamagui.</H1>
            <Paragraph textAlign="center">
              Here's a basic starter to show navigating from one screen to
              another.
            </Paragraph>
          </YStack>

          <YStack gap="$2.5" justifyContent="center" theme="orange">
            <Link href="/user/Abolfazl" asChild>
              <Button>Go to user page</Button>
            </Link>
            <Button
              onPress={() => {
                router.push("(tabs)");
              }}
            >
              Go to tabs page
            </Button>
          </YStack>

          <YStack gap="$5">
            <YGroup bordered theme="orange">
              <YGroup.Item>
                <ListItem
                  hoverTheme
                  pressTheme
                  subTitle="@natebirdman"
                  title="Nate"
                  onPress={() => Linking.openURL("https://x.com/natebirdman")}
                  icon={Twitter}
                />
              </YGroup.Item>
              <Separator />
              <YGroup.Item>
                <ListItem
                  hoverTheme
                  pressTheme
                  title="Tamagui"
                  href="https://github.com/tamagui/tamagui"
                  icon={Github}
                />
              </YGroup.Item>
              <Separator />
              <YGroup.Item>
                <ListItem
                  hoverTheme
                  pressTheme
                  href="https://github.com/tamagui/tamagui"
                  title="This Template"
                />
              </YGroup.Item>
            </YGroup>
          </YStack>
        </YStackStyled>
      </SafeAreaViewStyled>
    </RootLayout>
  );
}
