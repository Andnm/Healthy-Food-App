// import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import store from "./src/redux/store";
import Navigator from "./src/router/Navigator";
// import SafeAreaWrapper from "./src/components/SafeAreaWapper";
// import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <Provider store={store}>
      {/* <SafeAreaWrapper> */}
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
      {/* </SafeAreaWrapper> */}
    </Provider>
  );
}
