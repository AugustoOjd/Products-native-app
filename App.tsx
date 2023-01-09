import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Navitagion from './src/Navigation/Navigation';
import { AuthProvider } from './src/context/AuthContext';
import { ProductsProvider } from './src/context/ProductsContext';

interface Props {
  children: React.ReactNode
}

const AppState = ({children}: Props) =>{

  return(
    <AuthProvider>
      <ProductsProvider>
        {children}
      </ProductsProvider>
    </AuthProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navitagion/>
      </AppState>
    </NavigationContainer>
  )
}

export default App