import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {

    const {navigate} = useNavigation<any>()

  return (
    <View>
      <Text>HomeScreen</Text>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})