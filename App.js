// App.js
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";
import store from "./src/redux/store";
import Navigator from "./src/router/Navigator";
import React, { useCallback } from "react";

export default function App() {
  // Text.defaultProps.style = { fontFamily: "monospace" };
  const TextRender = Text.render;
  Text.render = function (...args) {
    const origin = TextRender.call(this, ...args);
    return React.cloneElement(origin, {
      style: [{ fontFamily: "Aleo" }, origin.props.style],
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </Provider>
    </View>
  );
}
