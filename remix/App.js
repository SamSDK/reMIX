import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Image, SafeAreaView, StatusBar } from 'react-native';
import Home from './screens/Home';
import Landing from './screens/Landing';
import User from './screens/User';
import logo from './assets/images/remix.png';

const Stack = createStackNavigator();
const theme = 'Light';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={theme == 'Light' ? '#fff' : '#000'}
        barStyle={theme == 'Light' ? 'dark-content' : 'light-content'}
      />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Landing"
        >
          <Stack.Screen
            name="Landing"
            options={{
              headerShown: false
            }}
            component={Landing}
          />
          <Stack.Screen name="Home" options={{
            headerLeft: null,
            headerTitle: () => <Image style={{width: 100, height: 80}} source={logo}/>
          }} component={Home} />
          <Stack.Screen name="User" component={User} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
