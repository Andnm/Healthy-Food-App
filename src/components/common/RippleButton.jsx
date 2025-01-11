// Import các thư viện cần thiết
import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

// Component RippleButton - Button có hiệu ứng ripple khi nhấn
const RippleButton = ({
  onPress, // Function xử lý khi button được nhấn
  children, // Cho phép truyền vào bất kỳ content nào
  buttonStyle, // Style tùy chỉnh cho button
  textStyle, // Style cho text trong button
  backgroundColor, // Màu nền cho hiệu ứng ripple
  buttonText, // Text hiển thị trong button
  leftButtonIcon, // Icon bên trái của button
  rightButtonIcon, // Icon bên phải của button
}) => {
  return (
    // Pressable component có hiệu ứng ripple khi nhấn
    <Pressable
      onPress={onPress}
      // Cấu hình hiệu ứng ripple cho Android
      android_ripple={{
        color: backgroundColor || "rgba(256, 256, 256, 0.2)", // Màu của ripple
        borderless: false, // Ripple không vượt quá border
        foreground: true, // Hiệu ứng hiển thị phía trên content
      }}
      // Kết hợp style mặc định và custom style
      style={{ ...styles.defaultButtonStyle, ...buttonStyle }}
    >
      {/* Render icon bên trái nếu có */}
      {leftButtonIcon && leftButtonIcon}

      {/* Render children nếu có, nếu không render buttonText */}
      {children
        ? children
        : buttonText && <Text style={[textStyle]}>{buttonText}</Text>}

      {/* Render icon bên phải nếu có */}
      {rightButtonIcon && rightButtonIcon}
    </Pressable>
  );
};

// Styles mặc định cho button
const styles = StyleSheet.create({
  defaultButtonStyle: {
    overflow: "hidden", // Ẩn phần ripple effect bị tràn
    flexDirection: "row", // Sắp xếp các phần tử theo hàng ngang
    justifyContent: "center", // Căn giữa theo chiều ngang
    alignItems: "center", // Căn giữa theo chiều dọc
    width: "100%", // Chiều rộng 100% container cha
    padding: 12, // Padding để dễ nhấn
    borderRadius: 8, // Bo tròn góc
  },
});

export default RippleButton;
