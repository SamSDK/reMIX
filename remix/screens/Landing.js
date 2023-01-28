import React from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import { useNavigation } from '@react-navigation/native';
import colors from '../config/colors';

export default function Landing() {
  const navigation = useNavigation();

  return <Screen 
  // backgroundImage={require('../assets/images/remix.png')}
  >
    <View style={{flex: 1, width: "100%", marginTop: 50, alignItems: "center"}}>
        <Image style={styles.logo} source={require('../assets/images/remix.png')}/>
        <AppButton style={styles.btn} title='Get Started'/>
    </View>

  </Screen>;
}

const styles = StyleSheet.create({
  btn: {
    width: '50%',
  },
  logo: {
    width: 200,
    height: 200
  },
});