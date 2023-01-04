import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {

    const {navigate} = useNavigation<any>()

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title='Go login'
        onPress={ () =>navigate('LoginScreen')}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})