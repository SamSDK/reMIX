import React from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import { useNavigation } from '@react-navigation/native';
import colors from '../config/colors';

export default function Landing() {
  const navigate = useNavigation().navigate;

  const handleClick = () => {
    navigate('Home');
  };

  return (
    <Screen backgroundImage={require('../assets/images/seamless.webp')}>
      <View
        style={{
          flex: 1,
          width: '100%',
          marginTop: 50,
          justifyContent: 'space-between',
          alignItems: 'center',
          shadowColor: "black", // IOS
          shadowOffset: { height: 4, width: 1 }, // IOS
          shadowOpacity: 0.2, // IOS
          shadowRadius: 2, //IOS
          elevation: 4, // Android
        }}
      >
        <View
          style={{ backgroundColor: 'black', padding: 30, width: 250, height: 250, justifyContent: "center", alignItems: "center", borderRadius: 200 }}
        >
          <Image
            style={styles.logo}
            source={require('../assets/images/remix.png')}
          />
        </View>
        <AppButton
          onPress={handleClick}
          style={styles.btn}
          title="Get Started"
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: '50%',
    marginBottom: 140,
  },
  logo: {
    width: 160,
    height: 120,
    tintColor: "white"
  },
});
