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
    <View style={{flex: 1, flexDirection: "column", justifyContent: 'center'}}>
        <View style={{width: '50%'}}>
        <Image style={styles.logo} resizeMode='center' source={require('../assets/images/remix.png')}/>
        </View>
        <AppButton style={styles.btn} title='Get Started'/>
    </View>

  </Screen>;
}

const styles = StyleSheet.create({
  btn: {
    position: 'absolute',
    width: '50%',
  },
  logo: {
    // flex:0,
    // position: 'absolute',
    // justifyContent: 'center',
    // backgroundColor: 'red',
    // width: "100%",
    // height: "60%",
    // right: "120%",
  },
});