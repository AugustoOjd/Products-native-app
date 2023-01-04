import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Navitagion from './src/Navigation/Navigation';

const App = () => {
  return (
    <NavigationContainer>
      <Navitagion/>
    </NavigationContainer>
  )
}

export default App