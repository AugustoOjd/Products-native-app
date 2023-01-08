import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { loginStyles } from '../theme/loginTheme'
import WhiteLogo from '../components/WhiteLogo'
import { useForm } from '../hooks/useForm'
import { StackScreenProps } from '@react-navigation/stack'
import { AuthContext } from '../context/AuthContext'


interface Props extends StackScreenProps<any, any> {}

const RegisterScreen = ({ navigation}:Props) => {

  const { email, password, name, onChange} = useForm({
    name: '',
    email: '',
    password: ''
  })

  const { singUp} = useContext(AuthContext)

  const onRegister = () =>{
    // console.log({
    //   name, email, password
    // })
    Keyboard.dismiss()
    singUp({name, email, password})

  }
  
  return (
    <>

    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#5856D6'}}
      behavior={ (Platform.OS === 'ios') ? 'padding' : 'height'}
    >
      
    <View style={loginStyles.formContainer}>
    <WhiteLogo/>

    <Text style={ loginStyles.title }>
        Registro
    </Text>

    <Text style={ loginStyles.label }>
        Nombre:
    </Text>
    <TextInput

        onChangeText={ (value) => onChange( value, 'name')}
        value={name}
        onSubmitEditing={onRegister}
        placeholder='Ingrese nombre'
        // keyboardType='email-address'
        // placeholderTextColor={'rgba(255,255,255, 0.4)'}
        underlineColorAndroid={'white'}
        
        autoCapitalize='words'
        autoCorrect={false}
        
        style={loginStyles.textInput}
    />

    <Text style={ loginStyles.label }>
        Email:
    </Text>
    <TextInput

        onChangeText={ (value) => onChange( value, 'email')}
        value={email}
        onSubmitEditing={onRegister}
        placeholder='Ingrese email'
        keyboardType='email-address'
        // placeholderTextColor={'rgba(255,255,255, 0.4)'}
        underlineColorAndroid={'white'}
        
        autoCapitalize='none'
        autoCorrect={false}
        
        style={loginStyles.textInput}
    />


    <Text style={ loginStyles.label }>
        Password:
    </Text>
    <TextInput

        onChangeText={ (value) => onChange( value, 'password')}
        value={password}
        onSubmitEditing={onRegister}
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
          onPress={ () => onRegister()}
        >
          <Text style={loginStyles.buttonText}>
            Crear cuenta
          </Text>
        </TouchableOpacity>
    </View>

{/* crear una nueva cuenta */}
    {/* <View style={loginStyles.newUserContainer}> */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={ ()=> navigation.replace('LoginScreen')}
          style={ loginStyles.btnToLogin}
        >
          <Text style={loginStyles.buttonText}>
            To Login
          </Text>
        </TouchableOpacity>
    {/* </View> */}
    


    </View>
    </KeyboardAvoidingView>
    </>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})