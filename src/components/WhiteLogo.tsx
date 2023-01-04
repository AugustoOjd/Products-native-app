import { View, Text, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const WhiteLogo = () => {
  return (
    <View style={{
        alignItems: 'center'
    }}>
        <Icon 
            name='logo-react'
            size={80}
            color={'white'}
        />
    </View>
  )
}

export default WhiteLogo