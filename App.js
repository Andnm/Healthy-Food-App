// App.js
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";
import store from "./src/redux/store";
import Navigator from "./src/router/Navigator";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Aleo: require("./assets/fonts/Aleo-Regular.ttf"),
    "Aleo-Bold": require("./assets/fonts/Aleo-Bold.ttf"),
    "Aleo-Thin": require("./assets/fonts/Aleo-Thin.ttf"),
    PlaywriteAUSA: require("./assets/fonts/PlaywriteAUSA-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Provider store={store}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </Provider>
    </View>
  );
}
