import Constants from "expo-constants";";


export const withConditionalStorybook = (AppComponent: React.ComponentType) => {
  const isStorybookEnabled =
    Constants.expoConfig?.extra?.storybookEnabled === "true";
  const EntryPoint = isStorybookEnabled
    ? require("../../.storybook").default
    : AppComponent;

  return <EntryPoint />;
};
