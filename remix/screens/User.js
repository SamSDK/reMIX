import React from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import { useNavigation } from '@react-navigation/native';
import colors from '../config/colors';

export default function User() {
  const navigation = useNavigation();

  return <Screen></Screen>;
}

const styles = StyleSheet.create({
  container: {},
});
