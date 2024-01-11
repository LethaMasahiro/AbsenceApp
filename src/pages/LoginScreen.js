import {React, useCallback, useState } from 'react';
import { View, Button, Image, StyleSheet, Dimensions, Text, ImageBackground, TextInput, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import { Link } from 'expo-router';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

SplashScreen.preventAutoHideAsync();


const HomeScreen = ({ navigation }) => {

    const [pressed, setPressed] = useState(false);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [fontsLoaded, fontError] = useFonts({
        'hvt': require('../assets/fonts/Helvetica.ttf'),
        'hvt-bold' : require('../assets/fonts/Helvetica-Bold.ttf'),
        'hvt-oblique' : require('../assets/fonts/Helvetica-Oblique.ttf'),
        'lato' : require('../assets/fonts/Lato-Regular.ttf'),
        'lato-black' : require('../assets/fonts/Lato-Black.ttf'),
        'lato-bold' : require('../assets/fonts/Lato-Bold.ttf')
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
        <ImageBackground source={require('../assets/koty.png')} style={styles.logo} />
        <View style={styles.login}>
            <View style={styles.inputfield}>
                <FontAwesome5 style={styles.userIcon} name="user-alt" color="black" />
                <TextInput placeholder="Email oder Username" style={{fontSize: 16}} value={username} onChangeText={setUsername} />
            </View> 
            <View style={styles.inputfield}>
                <Entypo style={styles.userIcon} name="lock" size={24} color="black" />
                <TextInput placeholder="Passwort" style={{fontSize: 16}} value={password} onChangeText={setPassword} secureTextEntry={true} />
            </View> 
            <Pressable style={({pressed}) => [
                    {
                        backgroundColor: pressed ? '#123625' : '#167146',
                    },
                    styles.button
                ]} 
                onPress={() => {
                    navigation.navigate('Account');
                    setPressed(true);
                    }}>
                <Text style={{fontFamily:"lato-bold", color:"#FFFFFF", fontSize: 20}}>Login</Text>
            </Pressable>
            
            <Pressable onPress={() => navigation.navigate('Password Reset')}>
                <Text style={{fontFamily:'lato-bold', fontSize: 14, paddingTop: 20}}>Passwort vergessen?</Text>
            </Pressable>
            <Pressable style={({pressed}) => [
                    {
                        backgroundColor: pressed ? '#123625' : '#167146',
                    },
                    styles.button
                ]} 
                marginTop={90}
                onPress={() => {
                    navigation.navigate('Registration');
                    setPressed(true);
                    }}>
                <Text style={{fontFamily:"lato-bold", color:"#FFFFFF", fontSize: 20}}>Registrieren</Text>
            </Pressable>
        </View>
        
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E8EB',
    alignItems: 'center',
  },

  logo: {
    width: windowWidth * 0.95,
    height: windowHeight * 0.45,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.5,
    position: 'absolute',
    top: windowHeight * 0.12
  },

  title: {
    fontFamily: 'lato-bold',
    fontSize: 30,
    paddingTop: 60,
  },
  login: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 160,
    alignItems:'center'
  },
  inputfield: {
    backgroundColor: '#FFFFFF',
    width: 282,
    height: 45,
    justifyContent: 'center',
    marginBottom: 45,
    paddingLeft: 60,
    borderRadius: 23,
    shadowColor: '#000',
    shadowOffset: { height: 6},
    shadowOpacity: 0.25
  },
  userIcon: {
    position: 'absolute',
    paddingLeft: 20,
    fontSize: 25
  },
  button: {
    width: 282,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { height: 6},
    shadowOpacity: 0.25,
    borderRadius: 23
  }
});

export default HomeScreen;