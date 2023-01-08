import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const ProtecctedScreen = () => {
  
  const { user, token, logOut} = useContext(AuthContext)
  
  return (
    <View style={styles.conatainer}>
      <Text style={styles.title}>ProtecctedScreen</Text>

      <Button
        title='logout'
        color={'#5856D6'}
        onPress={ ()=> logOut()}
      />

      <View style={styles.dataCard}>
        <Text>
          { JSON.stringify(user, null, 5)}
        </Text>
      </View>

      <Text style={{
        fontSize: 15,
        marginTop: 15,
        backgroundColor: 'violet',
        padding: 5,
        borderRadius: 10
      }}>
        Token: { JSON.stringify(token, null, 5)}
      </Text>
    </View>
  )
}

export default ProtecctedScreen

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginBottom: 20
  },
  dataCard: {
    backgroundColor: 'white',
    padding: 15,
    marginTop: 10,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
      }
})