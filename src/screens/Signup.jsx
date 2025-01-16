// === PHẦN 1: IMPORTS ===
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Platform,
  Dimensions,
} from "react-native";
// Import các component cơ bản từ React Native
// Platform: API để check nền tảng (iOS/Android)
// Dimensions: API lấy kích thước màn hình

import { LinearGradient } from "expo-linear-gradient";
// Import LinearGradient từ Expo để tạo gradient background

// Import các components tùy chỉnh và assets
import SafeAreaWrapper from "../components/layout/SafeAreaWrapper";
import RippleButton from "../components/common/RippleButton";
import SplitLine from "../components/common/SplitLine";

// Import assets hình ảnh
import backgroundImage from "../../assets/image/welcome_bg.png";
import googleIcon from "../../assets/image/google_icon.png";
import fbIcon from "../../assets/image/fb_logo_square.png";
import appleIcon from "../../assets/image/apple_logo.png";
import { ScreensName } from "../constants/ScreensName";

// === PHẦN 2: KHỞI TẠO BIẾN ===
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

// === PHẦN 3: COMPONENT CHÍNH ===
function Signup({ navigation }) {
  // Các hàm xử lý sự kiện
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

  // Cấu hình danh sách các nút đăng ký
  const buttonList = [
    {
      text: "Continue with Google",
      icon: (
        <Image
          source={googleIcon}
          style={{ width: 20, height: 20, ...styles.iconStyle }}
        />
      ),
      onPress: onPressGoogleButton,
    },
    {
      text: "Continue with Facebook",
      icon: (
        <Image
          source={fbIcon}
          style={{ width: 20, height: 20, ...styles.iconStyle }}
        />
      ),
      onPress: onPressFacebookButton,
    },
    {
      text: "Continue with Apple",
      icon: (
        <Image
          source={appleIcon}
          style={{ width: 20, height: 20, ...styles.iconStyle }}
        />
      ),
      onPress: onPressAppleButton,
    },
  ];

  // === PHẦN 4: RENDER UI ===
  return (
    <SafeAreaWrapper
      headerStyle={{ theme: "light", backgroundColor: "transparent" }}
    >
      {/* Background Image */}
      <Image source={backgroundImage} style={styles.backgroundImage} />

      {/* Gradient Overlay */}
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
          top: 0,
          bottom: Platform.OS === "ios" ? -35 : 0,
          left: 0,
          right: 0,
        }}
      >
        {/* Content Container */}
        <View style={styles.view}>
          {/* Sign up with email button */}
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

          {/* Divider */}
          <SplitLine
            text="or use social sign up"
            textStyle={styles.splitTextStyle}
            lineStyle={styles.splitLineStyle}
          />

          {/* Social Login Buttons */}
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

          {/* Login Link */}
          <Text style={styles.alreadyText}>
            Already have account?{" "}
            <Text style={{ textDecorationLine: "underline" }}>Log In</Text>
          </Text>
        </View>
      </LinearGradient>
    </SafeAreaWrapper>
  );
}

// === PHẦN 5: STYLES ===
const styles = StyleSheet.create({
  backgroundImage: {
    position: "absolute",
    top: -40, // Điều chỉnh theo platform
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
    padding: 18,
    paddingHorizontal: 32,
    marginTop: 16,
    borderRadius: 16,
    backgroundColor: "#ffffff",
    // Shadow styles
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.05,
    shadowRadius: 4.65,
    elevation: 6,
  },
  textStyle: {
    fontSize: 18,
    // fontWeight: "bold",
    fontFamily: "Aleo_700Bold",
    color: "#000",
    marginLeft: 10,
  },
  iconStyle: {
    // position: "absolute",
    // left: "17%",
    marginLeft: 28,
    resizeMode: "contain",
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
    fontFamily: "Aleo_400Regular",
  },
});

export default Signup;
