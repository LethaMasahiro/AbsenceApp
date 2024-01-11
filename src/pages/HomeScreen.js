import {React, useCallback } from 'react';
import { View, Button, Image, StyleSheet, Dimensions, Text } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

SplashScreen.preventAutoHideAsync();

const HomeScreen = ({ navigation }) => {

  const [fontsLoaded, fontError] = useFonts({
    'hvt': require('../assets/fonts/Helvetica.ttf'),
    'hvt-bold' : require('../assets/fonts/Helvetica-Bold.ttf'),
    'hvt-oblique' : require('../assets/fonts/Helvetica-Oblique.ttf'),
    'lato' : require('../assets/fonts/Lato-Regular.ttf'),
    'lato-black' : require('../assets/fonts/Lato-Black.ttf'),

  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Image source={require('../assets/koty.png')} style={styles.logo} alt='I am the logo'/>
      <Text style={styles.text}>KOTY Company</Text>    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E8EB',
    alignItems: 'center',
    paddingTop: windowHeight * 0.09
  },

  logo: {
    width: windowWidth * 0.95,
    height: windowHeight * 0.45,
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
    fontFamily: 'lato-black',
    fontSize: 40,
    paddingTop: 60
  }
});

export default HomeScreen;