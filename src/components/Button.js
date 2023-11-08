import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

const Button = (props) => {

  const { onPress, title } = props;

  return (
    <Pressable 
    style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }, styles.button]} 
      onPress={onPress}>
      <Text style={{ ...styles.buttonText, ...props.style }}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#0033ff',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default Button;