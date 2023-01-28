import React from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import { useNavigation } from '@react-navigation/native';
import colors from '../config/colors';

export default function Landing() {
  const navigation = useNavigation();

  return <Screen>
    <View>
        <Text>
            'Hello'
        </Text>
        <AppButton style={styles.btn} title='hello'/>
    </View>

  </Screen>;
}

const styles = StyleSheet.create({
  btn: {
    
  },
});
