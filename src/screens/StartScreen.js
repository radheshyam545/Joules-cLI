import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
// import AsyncStorage from '@react-native-async-storage/async-storage'

 function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>JOULS</Header>
      <Paragraph>
        Sample test
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
    </Background>
  )
}

export default StartScreen;