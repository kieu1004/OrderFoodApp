import 'react-native-gesture-handler'
import React from 'react'
import {StatusBar} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { COLORS } from './src/global/colors'
import DetailsScreen from './src/views/screens/DetailsScreen'
import BottomNavigator from './src/views/navigation/BottomNavigation'
import SplashScreen from './src/views/screens/SplashScreen'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="BoardScreen" component={SplashScreen} />
        <Stack.Screen name="Home" component={BottomNavigator} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App