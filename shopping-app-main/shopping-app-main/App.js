import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/login';
import Home from './screens/home';
import Cart from './screens/cart';

export default function App() {
  const MainNavigator = createStackNavigator();

  return (
    <View>
      <NavigationContainer>
        <MainNavigator.Navigator>
          <MainNavigator.Screen name = "Home" component = {Home} />
          <MainNavigator.Screen name = "Login" component = {Login} />
        </MainNavigator.Navigator>
      </NavigationContainer>
    </View>
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
