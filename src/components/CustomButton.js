import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colors from '../constants/colors';

const CustomButton = ({
  title,
  onPress,
  backgroundColor,
  borderColor,
  textColor,}) => {
  return (
    <TouchableOpacity
      style={[styles.buttons, {backgroundColor, borderColor}]}
      onPress={onPress}>
      <Text style={[styles.buttonText, {color: textColor}]}> {title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 8,
    borderWidth: 2,
    marginVertical: 10,
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;
