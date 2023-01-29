import React from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import { useNavigation } from '@react-navigation/native';
import colors from '../config/colors';
import RecipePill from '../components/RecipePill';

export default function Home() {
  const navigation = useNavigation();

  return (
    <Screen>
      <Text style={{left: '6%', fontSize: 28, marginBottom: 20}}> Search: ... </Text>
      <RecipePill title='Smoothie'/>
      <RecipePill title='Spinach Smoothie'/>
      <RecipePill title='Mango Juice'/>
      <RecipePill title='Oat milk protein'/>
      <RecipePill title='Soy Choco mix'/>
      <Text style={{left: '46%', fontSize: 28}}> ... </Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});
