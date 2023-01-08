import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import ProtecctedScreen from '../Screens/ProtecctedScreen';
import { AuthContext } from '../context/AuthContext';
import LoadingScreen from '../Screens/LoadingScreen';

const Stack = createStackNavigator();

const Navitagion = () => {

  const { status } = useContext(AuthContext)

  if( status === 'cheking') return <LoadingScreen/>

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
    >

      {
        (status !== 'authenticated')
        ? (
          <>
                <Stack.Screen name="LoginScreen"    component={LoginScreen} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          </>
        )
        :
        <Stack.Screen name="ProtecctedScreen" component={ProtecctedScreen} />
      }

    </Stack.Navigator>
  );
}

export default Navitagion