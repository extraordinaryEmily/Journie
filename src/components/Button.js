import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const Button = ({ text, fontSize, widthRatio, yPosition, onPress }) => {
  const { width } = Dimensions.get('window');
  const buttonHeight = fontSize * 3;
  const buttonWidth = width * widthRatio;
  const paddingVertical = fontSize * 0.7;

  return (
    <TouchableOpacity 
      style={[
        styles.button, 
        { 
          width: buttonWidth, 
          height: buttonHeight,
          paddingVertical: paddingVertical,
          position: 'absolute',
          top: yPosition,
          left: (width - buttonWidth) / 2 // Center horizontally
        }
      ]} 
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { fontSize }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F5E260',
    paddingVertical: 9, // fontSize * 0.5
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Button;