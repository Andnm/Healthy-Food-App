import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const RippleButton = ({
  onPress,
  children, // To allow passing any content inside the button
  buttonStyle,
  textStyle,
  backgroundColor,
  buttonText,
  leftButtonIcon,
  rightButtonIcon,
}) => {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{
        color: backgroundColor || "rgba(256, 256, 256, 0.2)",
        borderless: false,
        foreground: true,
      }}
      style={{ ...styles.defaultButtonStyle, ...buttonStyle }}
    >
      {leftButtonIcon && leftButtonIcon}
      {children
        ? children
        : buttonText && <Text style={[textStyle]}>{buttonText}</Text>}
      {rightButtonIcon && rightButtonIcon}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  defaultButtonStyle: {
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%", // Ensure button spans its parent container
    padding: 12, // Add padding to make it touchable
    borderRadius: 8, // Add border radius for better UI
  },
});

export default RippleButton;
