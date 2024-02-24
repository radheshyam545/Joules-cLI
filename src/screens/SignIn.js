import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native'
import React, { useState } from 'react'
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as fp,
} from 'react-native-responsive-dimensions'

import LoginInput from './LoginInput'
import SignupInputs from './SignupInputs'
import Circle from './Circle'
import { ScrollView } from 'react-native-gesture-handler'

const SignIn = ({ navigation }) => {
  const [login, setLogin] = useState(true)
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : '100'}>
      <ScrollView>
        <View style={styles.Container}>
          <View style={styles.LogoContainer}>
            <View style={styles.circles}>
              <Circle />
              <Circle />
            </View>

            <View style={styles.LogoWrapper}>
              <Image
                style={styles.Logo}
                source={require('../assets/jouls.png')}
              />
            </View>
          </View>
          <View style={styles.SignInBoxContainer}>
            <View style={styles.SignIn_UpBox}>
              <View style={styles.Toggle_Login_SignUp}>
                <Text
                  style={login ? styles.TogglerText : styles.onclickTogglerText}
                  onPress={() => setLogin(true)}
                >
                  Login
                </Text>
                <Text style={[{ fontSize: fp(4) }]}>|</Text>
                <Text
                  style={
                    !login ? styles.TogglerText : styles.onclickTogglerText
                  }
                  onPress={() => setLogin(false)}
                >
                  Sign up
                </Text>
              </View>
              <View style={styles.Inputs}>
                {login ? (
                  <LoginInput navigation={navigation} />
                ) : (
                  <SignupInputs navigation={navigation} />
                )}
                <View style={styles.row}>
                  <Text style={styles.message}>
                    {login
                      ? 'Don’t have an account?'
                      : 'Already have an account?'}{' '}
                  </Text>
                  <TouchableOpacity>
                    {login ? (
                      <Text onPress={() => setLogin(false)} style={styles.link}>
                        Sign up
                      </Text>
                    ) : (
                      <Text onPress={() => setLogin(true)} style={styles.link}>
                        Sign in
                      </Text>
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default SignIn

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  LogoContainer: {
    backgroundColor: '#fff',
    height: hp(27),
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circles: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    position: 'absolute',
    // backgroundColor: 'red',
    gap: 8,
    bottom: hp(-25),
  },
  LogoWrapper: {
    // backgroundColor: 'pink',
    borderRadius: 14,
    elevation: 3,
  },
  Logo: {
    height: hp(9),
    width: wp(40),
    borderRadius: 14,
    resizeMode: 'contain',
    backgroundColor: '#fff',
  },
  SignInBoxContainer: {
    flex: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: '#fff',
    marginTop: -18,
  },
  SignIn_UpBox: {
    // flex: 1,
    // minHeight: hp(70),
    margin: 20,
    borderRadius: 20,
    padding: 20,
    elevation: 2,
    backgroundColor: '#fff',
  },
  Toggle_Login_SignUp: {
    flexDirection: 'row',
    elevation: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  TogglerText: {
    padding: 12,
    color: 'green',
    fontSize: fp(2),
    fontFamily: 'Rubik',
  },
  onclickTogglerText: {
    padding: 12,
    color: 'black',
    fontSize: fp(2),
    fontFamily: 'Rubik',
  },
  Inputs: {
    // marginHorizontal: 20,
    // alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    color: 'black',
  },
  link: {
    fontWeight: 600,
    color: 'green',
    textDecorationLine: 'underline',
  },
})
