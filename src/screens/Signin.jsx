import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
  Image,
} from "react-native";
import SafeAreaWrapper from "../components/layout/SafeAreaWrapper";
import SigninInputField from "../components/common/SigninInputField";
import Ionicons from "../components/common/VectorIcons/Ionicons";
import MaterialIcons from "../components/common/VectorIcons/MaterialIcons";
import DecorationDot from "../components/common/DecorationDot";
import { TouchableOpacity } from "react-native";
import RippleButton from "../components/common/RippleButton";

import googleIcon from "../assets/image/google_icon.png";
import fbIcon from "../assets/image/fb_round.png";
import appleIcon from "../assets/image/apple_logo.png";
import loginHeaderIcon from "../assets/image/login_bg.png";

const WIDTH = Dimensions.get("window").width;

function Signin({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginMethod = [
    {
      name: "Facebook",
      icon: fbIcon,
      color: "#3B5998",
    },
    {
      name: "Google",
      icon: googleIcon,
      color: "#4285F4",
    },
    {
      name: "IOS",
      icon: appleIcon,
      color: "#000000",
    },
  ];

  const handlePress = () => {
    navigation.navigate("signup");
  };

  const renderLoginMethod = () => {
    return loginMethod.map((item, index) => (
      <RippleButton
        key={index}
        buttonStyle={styles.loginMethod}
        backgroundColor={"rgab(0, 0, 0, 0.2)"}
      >
        <Image
          source={item.icon}
          style={{
            width: WIDTH * 0.08,
            height: WIDTH * 0.08,
            resizeMode: "contain",
          }}
        />
      </RippleButton>
    ));
  };

  return (
    <SafeAreaWrapper headerStyle={{ backgroundColor: "transparent" }}>
      <Image source={loginHeaderIcon} style={styles.backgroundImage} />
      <Text style={styles.title}>Sign in with email</Text>
      <View style={styles.formContainer}>
        <SigninInputField
          state={email}
          setState={setEmail}
          icon={<Ionicons name="mail-outline" size={24} color="#5FC88F" />}
          iconBackgroundcolor="#DEF5E9"
          placeholder="Email"
          inputType="email-address"
          keyboardType="email-address"
        />
        <SigninInputField
          state={password}
          setState={setPassword}
          icon={<MaterialIcons name="lock-open" size={24} color="#9F9DF3" />}
          iconBackgroundcolor="#EBECFF"
          placeholder="Password"
          secureTextEntry
        />
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        <RippleButton
          onPress={handlePress}
          buttonText="Sign in"
          buttonStyle={styles.signinButton}
          textStyle={styles.signinButtonText}
        />
      </View>
      <View style={styles.loginMethodContainer}>{renderLoginMethod()}</View>
      <>
        <DecorationDot
          size={250}
          top={0}
          left={0}
          opacity={0.3}
          zIndex={10}
          transform={[{ translateX: -220 / 2 }, { translateY: -400 / 2 }]}
        />
        <DecorationDot
          size={250}
          top={0}
          left={0}
          zIndex={9}
          backgroundColor={"#AEC687"}
          transform={[{ translateX: -350 / 2 }, { translateY: -150 / 2 }]}
        />
        <DecorationDot
          size={250}
          bottom={0}
          right={0}
          opacity={0.3}
          zIndex={10}
          transform={[{ translateX: 200 }, { translateY: 50 }]}
        />
        <DecorationDot
          size={250}
          bottom={0}
          lrighteft={0}
          zIndex={9}
          backgroundColor={"#AEC687"}
          transform={[{ translateX: 320 }, { translateY: 150 }]}
        />
      </>
    </SafeAreaWrapper>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: "60%",
    height: "35%",
    resizeMode: "cover",
    marginHorizontal: "20%",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
  },
  formContainer: {
    width: WIDTH,
    justifyContent: "space-around",
    alignItems: "center",
    gap: 20,
  },
  forgotPassword: {
    width: WIDTH * 0.85,
    textAlign: "right",
    fontWeight: "600",
    transform: [{ translateY: -10 }],
  },
  signinButton: {
    width: WIDTH * 0.85,
    backgroundColor: "#191C32",
    padding: 18,
    borderRadius: 50,
    overflow: "hidden",
  },
  signinButtonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  loginMethodContainer: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  loginMethod: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 20,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Signin;
