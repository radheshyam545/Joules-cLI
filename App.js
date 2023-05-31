import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import { Store } from './src/Redux/Store'
import { Provider as Sample } from 'react-redux'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  HomePage,
  Load,
  Eligible,
  Car,
  House,
  Date,
  Wifi,
  Home,
  Flat,
} from './src/screens';
import Splash from './src/screens/Splash'
import SceduleDate from './src/screens/SceduleDate'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Sample store={Store} >

    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          
          <Stack.Screen  options={{headerShown: false}}  name="Splash" component={Splash}     />
          {/* <Stack.Screen name="StartScreen" component={StartScreen} /> */}
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen}/>
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="Load" component={Load} />
          <Stack.Screen name="Eligible" component={Eligible} />
          <Stack.Screen name="Car" component={Car} />
          <Stack.Screen name="House" component={House} />
          <Stack.Screen name="Date" component={Date} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Wifi" component={Wifi} />
          <Stack.Screen name="Flat" component={Flat} />
          <Stack.Screen name="SceduleDate" component={SceduleDate} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
             </Sample>
  )
}
