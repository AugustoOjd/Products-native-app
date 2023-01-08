import { Alert, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import Background from '../components/Background'
import WhiteLogo from '../components/WhiteLogo'
import { loginStyles } from '../theme/loginTheme'
import { useForm } from '../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack'
import { AuthContext } from '../context/AuthContext'

interface Props extends StackScreenProps<any, any> {}

const LoginScreen = ({ navigation }:Props) => {

  const { singIn, errorMessage, removeError } = useContext(AuthContext)

  const { email, password, onChange} = useForm({
    email: '',
    password: ''
  })

  useEffect(() => {
    if(errorMessage.length === 0) return
    
    Alert.alert(
      'Login incorrecto', 
      errorMessage, 
      [
        {
          text: 'Ok',
          onPress: removeError
        }
      ])

  }, [errorMessage])
  

  const onLogin = () =>{
    console.log({
      email, password
    })
    Keyboard.dismiss()

    singIn({ email, password})
  }

  return (
    <>
    
    <Background/>

    <KeyboardAvoidingView style={{ flex: 1 }}
      behavior={ (Platform.OS === 'ios') ? 'padding' : 'height'}
    >
      
    <View style={loginStyles.formContainer}>
    <WhiteLogo/>

    <Text style={ loginStyles.title }>
        Login
    </Text>

    <Text style={ loginStyles.label }>
        Email
    </Text>
    <TextInput

        onChangeText={ (value) => onChange( value, 'email')}
        value={email}
        onSubmitEditing={onLogin}
        placeholder='Ingrese email'
        keyboardType='email-address'
        // placeholderTextColor={'rgba(255,255,255, 0.4)'}
        underlineColorAndroid={'white'}
        autoCapitalize='none'
        autoCorrect={false}
        style={loginStyles.textInput}
    />


    <Text style={ loginStyles.label }>
        Password
    </Text>
    <TextInput

        onChangeText={ (value) => onChange( value, 'password')}
        value={password}
        onSubmitEditing={onLogin}
        placeholder='Ingrese password'
        secureTextEntry
        // placeholderTextColor={'rgba(255,255,255, 0.4)'}
        underlineColorAndroid={'white'}
        autoCapitalize='none'
        autoCorrect={false}

        style={ loginStyles.textInput}
    />

{/* boton login */}
    <View style={loginStyles.btnContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={ loginStyles.button}
          onPress={ () => onLogin()}
        >
          <Text style={loginStyles.buttonText}>
            Login
          </Text>
        </TouchableOpacity>
    </View>

{/* crear una nueva cuenta */}
    <View style={loginStyles.newUserContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={ ()=> navigation.replace('RegisterScreen')}
        >
          <Text style={loginStyles.buttonText}>
            Nueva cuenta ?
          </Text>
        </TouchableOpacity>
    </View>
    


    </View>
    </KeyboardAvoidingView>
    </>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})