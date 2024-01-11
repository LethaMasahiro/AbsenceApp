import React, { useCallback, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/pages/HomeScreen';
import LoginScreen from './src/pages/LoginScreen';
import AccountScreen from './src/pages/AccountScreen';
import RegistrationScreen from './src/pages/RegisterScreen';
import ForgotPasswordScreen from './src/pages/ForgotPassword';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen
            name='Login'
            component={LoginScreen}
          />
          <Stack.Screen 
            name='Account'
            component={AccountScreen}
          />
          <Stack.Screen 
            name='Registration'
            component={RegistrationScreen}
          />
          <Stack.Screen 
            name='Password Reset'
            component={ForgotPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'hvt-bold'
  }
});
