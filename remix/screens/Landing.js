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
        }}
      >
        <View
          style={{ backgroundColor: 'black', padding: 30, borderRadius: 200 }}
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
    width: 200,
    height: 200,
    tintColor: 'white',
  },
});
