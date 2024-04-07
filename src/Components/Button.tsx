import { View, Text, ButtonProps, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext';
import { Styles } from '../Styles/GlobalStyles';

interface ButtonProps {
  onPress: () => void;
  title: string;
  isBlue?: boolean;
  isGray?: boolean;
}

export default function Button({ title, onPress, isBlue, isGray }: ButtonProps) {
  const theme = useContext(ThemeContext);
  return (
    <TouchableOpacity
      style={
        isBlue
          ? Styles.btnBlue
          : isGray
            ? Styles.btnGray
            : theme === "light"
              ? Styles.btnLight
              : Styles.btnDark
      }
      onPress={onPress}
    >
      <Text
        style={
          isBlue || isGray
            ? Styles.smallTextLight
            : theme === "dark"
              ? Styles.smallTextLight
              : Styles.smallTextDark
        }
      >
        {title}
      </Text>

    </TouchableOpacity>
  )
}