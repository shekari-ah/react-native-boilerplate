import { StyleSheet } from "react-native";

import { RootLayout } from "@/Providers";
import { SafeAreaViewStyled, YStackStyled } from "@/components";
import { Link } from "expo-router";
import { Button, H1, H3, SizableText, Tabs, YGroup } from "tamagui";

export default function TabTwoScreen() {
  return (
    <RootLayout>
      <SafeAreaViewStyled edges={["top"]}>
        <Tabs
          defaultValue="tab1"
          flex={1}
          flexDirection="column"
          justifyContent="space-around"
        >
          <YStackStyled justifyContent="center">
            <YGroup bordered padding={"$4"} height={"50%"} theme={"orange"}>
              <Tabs.Content
                value="tab1"
                justifyContent="space-between"
                flex={1}
              >
                <H1>Home 1</H1>
                <Link href="../" asChild>
                  <Button>Go back Home</Button>
                </Link>
              </Tabs.Content>
              <Tabs.Content value="tab2">
                <H1>Home 2</H1>
                <H3>Content</H3>
              </Tabs.Content>
            </YGroup>
          </YStackStyled>
          <Tabs.List height="$6" space m={12} theme={"orange"}>
            <Tabs.Tab height="100%" value="tab1" flex={1} borderRadius={12}>
              <SizableText>Home 1</SizableText>
            </Tabs.Tab>
            <Tabs.Tab height="100%" value="tab2" flex={1} borderRadius={12}>
              <SizableText>Home 2</SizableText>
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </SafeAreaViewStyled>
    </RootLayout>
    // <View style={styles.container}>
    //
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
