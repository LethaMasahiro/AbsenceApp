import {React, useCallback, useState, useEffect } from 'react';
import { View, Button, Image, StyleSheet, Dimensions, Text, ImageBackground, TextInput, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import { Link } from 'expo-router';
import GlobalApi from '../Utils/GlobalApi';

SplashScreen.preventAutoHideAsync();

const AccountScreen = ({ navigation }) => {


  const [member, setMember] = useState();

  useEffect(() => {
    getMembers();
  }, [])

  const getMembers = () => {
    GlobalApi.getMember().then(resp => {
      console.log("resp", resp.members);
      setMember(resp?.members);
    })
  }

  return(
    <View>
        <Text>I'm a test</Text>
    </View>
  );
}

export default AccountScreen;