import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { Text, TextInput } from "react-native";
import store from "./src/redux/store";
import Navigator from "./src/router/Navigator";
import { useEffect, useState } from "react";
import * as Font from "expo-font";

// Component App chính của ứng dụng
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Aleo: require("./assets/fonts/Aleo-Regular.ttf"),
        "Aleo-Bold": require("./assets/fonts/Aleo-Bold.ttf"),
        "Aleo-Thin": require("./assets/fonts/Aleo-Thin.ttf"),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // You can show a loading spinner here if needed
  }

  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.style = { ...Text.defaultProps.style, fontFamily: "Aleo" };

  TextInput.defaultProps = TextInput.defaultProps || {};
  TextInput.defaultProps.style = {
    ...TextInput.defaultProps.style,
    fontFamily: "Aleo",
  };

  return (
    // Provider bao bọc toàn bộ ứng dụng để các component con có thể truy cập Redux store
    <Provider store={store}>
      {/* NavigationContainer bao bọc navigation system của ứng dụng */}
      <NavigationContainer>
        {/* Component Navigator chứa cấu hình các màn hình và route */}
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
}
