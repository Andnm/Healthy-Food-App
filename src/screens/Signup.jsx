import React from "react";
import SafeAreaWrapper from "../components/layout/SafeAreaWrapper";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Platform,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import backgroundImage from "../assets/image/welcome_bg.png";
import RippleButton from "../components/common/RippleButton";

import googleIcon from "../assets/image/google_icon.png";
import fbIcon from "../assets/image/fb_logo_square.png";
import appleIcon from "../assets/image/apple_logo.png";
import SplitLine from "../components/common/SplitLine";
import { ScreensName } from "../router/ScreensName";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
function Signup({ navigation }) {
  const onPressGoogleButton = () => {
    navigation.navigate(ScreensName.signin);
  };

  const onPressFacebookButton = () => {
    navigation.navigate(ScreensName.signin);
  };

  const onPressAppleButton = () => {
    navigation.navigate(ScreensName.signin);
  };

  const onPressSignupButton = () => {
    navigation.navigate(ScreensName.signin);
  };

  const buttonList = [
    {
      text: "Continue with Google",
      icon: <Image source={googleIcon} style={{ width: 20, height: 20 }} />,
      onPress: onPressGoogleButton,
    },
    {
      text: "Continue with Facebook",
      icon: <Image source={fbIcon} style={{ width: 20, height: 20 }} />,
      onPress: onPressFacebookButton,
    },
    {
      text: "Continue with Apple",
      icon: <Image source={appleIcon} style={{ width: 20, height: 20 }} />,
      onPress: onPressAppleButton,
    },
  ];

  return (
    <SafeAreaWrapper
      headerStyle={{ theme: "light", backgroundColor: "transparent" }}
    >
      <Image source={backgroundImage} style={styles.backgroundImage} />
      <LinearGradient
        colors={[
          "transparent",
          "rgba(64, 180, 145, 0.2)",
          "rgba(64, 180, 145, 0.4)",
          "rgba(64, 180, 145,0.6)",
          "rgba(64, 180, 145, 0.8)",
          "rgba(64, 180, 145, 1)",
          "rgba(64, 180, 145, 1)",
          "#40B491",
          "#40B491",
          "#40B491",
        ]}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        // start={{ x: 1, y: 1 }}
        // end={{ x: 0, y: 0 }}
      >
        <View style={styles.view}>
          <RippleButton
            buttonStyle={{
              ...styles.socialButtonStyle,
              backgroundColor: "#191C32",
              justifyContent: "center",
            }}
            buttonText={"Sign up with email"}
            textStyle={{ ...styles.textStyle, color: "#ffffff" }}
            onPress={onPressSignupButton}
          />
          <SplitLine
            text="or use social sign up"
            textStyle={styles.splitTextStyle}
            lineStyle={styles.splitLineStyle}
          />
          {buttonList.map((item, index) => (
            <RippleButton
              key={index}
              buttonStyle={styles.socialButtonStyle}
              leftButtonIcon={item.icon}
              buttonText={item.text}
              textStyle={styles.textStyle}
              onPress={item.onPress}
              backgroundColor={"rgba(0, 0, 0, 0.2)"}
            />
          ))}
          <Text style={styles.alreadyText}>
            Already have account?{" "}
            <Text style={{ textDecorationLine: "underline" }}>Log In</Text>
          </Text>
        </View>
      </LinearGradient>
    </SafeAreaWrapper>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    position: "absolute",
    top: Platform.OS === "ios" ? -15 : -40,
    width: "100%",
    height: "60%",
    resizeMode: "cover",
    borderRadius: 20,
    transform: [{ translateY: Platform.OS === "ios" ? -15 : -10 }],
  },
  view: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 50,
  },
  socialButtonStyle: {
    flexDirection: "row",
    width: "80%",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 12,
    paddingHorizontal: 32,
    marginTop: 16,
    borderRadius: 16,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4.65,
    elevation: 6,
  },
  textStyle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginLeft: 10,
  },
  splitLineStyle: {
    width: WIDTH * 0.25,
    marginTop: 12,
  },
  alreadyText: {
    marginHorizontal: 8,
    marginVertical: 24,
    fontSize: 16,
    color: "#FFFFFF",
  },
});

export default Signup;
