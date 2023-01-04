import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Background from '../components/Background'
import WhiteLogo from '../components/WhiteLogo'
import { loginStyles } from '../theme/loginTheme'

const LoginScreen = () => {
  return (
    <>
    
    <Background/>


    <WhiteLogo/>

    <Text style={ loginStyles.title }>
        Login
    </Text>

    <Text style={ loginStyles.label }>
        Email
    </Text>
    <TextInput
        placeholder='Ingrese email'
        keyboardType='email-address'
        // placeholderTextColor={'rgba(255,255,255, 0.4)'}
        style={{
            paddingHorizontal: 15,
            marginTop: 10,
            backgroundColor: 'white',
            borderRadius: 15
        }}
    />
    
    </>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})