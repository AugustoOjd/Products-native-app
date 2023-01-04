import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Background = () => {
  return (
    <View 
        style={{
            position: 'absolute',
            backgroundColor: '#5856D6',
            top: -440,
            width: 1000,
            height: 1200,
            transform: [
                { rotate: '-70deg'}
            ]
        }}
    
    />
  )
}

export default Background

const styles = StyleSheet.create({})