/* eslint-disable react/react-in-jsx-scope */
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from './config/colors';

import Landing from './screens/Landing';

const TabScreen = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
  
      })}
    ></Tab.Navigator>
  );
};

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Landing"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Landing" component={Landing} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// eslint-disable-next-line no-unused-vars
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
