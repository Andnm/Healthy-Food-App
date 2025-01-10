import React from "react";
import { View, Text, StyleSheet, TextStyle, ViewStyle } from "react-native";

const SplitLine = ({ text, textStyle, lineStyle }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.line, lineStyle]} />
      <Text style={[styles.text, textStyle]}>{text}</Text>
      <View style={[styles.line, lineStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  line: {
    height: 1,
    backgroundColor: "#D6D6D6", // Default color for the line
    borderRadius: 1,
  },
  text: {
    marginHorizontal: 8,
    fontSize: 16,
    color: "#D6D6D6", // Default text color
  },
});

export default SplitLine;
