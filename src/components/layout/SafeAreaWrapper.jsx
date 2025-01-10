import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  ImageBackground,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const SafeAreaWrapper = ({
  headerTitle = "",
  headerStyle = {
    backgroundColor: "transparent",
    textColor: "#000000",
    theme: "black",
  },
  backgroundImage,
  backgroundStyle,
  children,
}) => {
  const { backgroundColor, textColor, theme } = headerStyle;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={theme === "light" ? "light-content" : "dark-content"}
        backgroundColor={backgroundColor}
        translucent={true}
      />
      {backgroundImage ? (
        <ImageBackground
          source={backgroundImage}
          style={[styles.background && backgroundStyle]}
          imageStyle={{ resizeMode: "cover" }}
        >
          {headerTitle ? (
            <View style={styles.header}>
              <Text style={[styles.headerText, { color: textColor }]}>
                {headerTitle}
              </Text>
            </View>
          ) : null}
          <View style={styles.content}>{children}</View>
        </ImageBackground>
      ) : (
        <>
          {headerTitle ? (
            <View style={[styles.header, { backgroundColor }]}>
              <Text style={[styles.headerText, { color: textColor }]}>
                {headerTitle}
              </Text>
            </View>
          ) : null}
          <View style={[styles.content, { backgroundColor }]}>{children}</View>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: WIDTH,
    height: HEIGHT,
    position: "relative",
  },
  background: {
    flex: 1,
  },
  header: {
    paddingTop: Platform.OS === "ios" ? 15 : 10,
    justifyContent: "center",
    alignItems: "center",
    height: 60, // Set a consistent header height
    zIndex: 1,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    zIndex: 0,
  },
});

export default SafeAreaWrapper;
