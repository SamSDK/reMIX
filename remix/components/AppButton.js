import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import colors from '../config/colors';

function AppButton({
  title,
  onPress,
  color = 'primary',
  disabled = false,
  style,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        style,
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 60,
    alignSelf: 'center',
    alignItems: 'center',
    padding: 20,
    width: '100%',
    marginVertical: 10,
    backgroundColor: colors.primary,
    shadowColor: "black", // IOS
    shadowOffset: { height: 4, width: 1 }, // IOS
    shadowOpacity: 0.2, // IOS
    shadowRadius: 2, //IOS
    elevation: 4, // Android
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif',
  }
});

export default AppButton