import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const CustomButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{ ...styles.buttonContainer, ...props.styles }}
    >
      <Text style={styles.addTitle}>Click here to add a card:</Text>
      <View style={styles.icon}>{props.children}</View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderColor: "black",
    borderWidth: 1,
  },
  addTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  icon: {
    flex: 1,
  },
});
