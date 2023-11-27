import { Stack } from "expo-router";
import { useCallback, useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const Layout = () => {
  const [fontsLoaded] = useFonts({
    "DM-Bold": require("../assets/fonts/DMSans-Bold.ttf"),
    "DM-Medium": require("../assets/fonts/DMSans-Medium.ttf"),
    "DM-Regular": require("../assets/fonts/DMSans-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    onLayoutRootView(); // Call it when the component mounts
  }, [onLayoutRootView]);

  if (!fontsLoaded) {
    return null;
  }

  // Fonts are loaded, render your component
  return <Stack onLayoutRootView={onLayoutRootView} />;
};

export default Layout;
