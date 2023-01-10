import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProductsScreen from '../Screens/ProductsScreen'
import ProductScreen from '../Screens/ProductScreen'


export type ProductsStackParams = {
    ProductsScreen: undefined,
    ProductScreen:  {id?: string, newName?: string}
}

const Stack = createStackNavigator<ProductsStackParams>()

const ProductsNavigation = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            cardStyle: {
                backgroundColor: 'white'
            },
            headerStyle: {
                // elevation: 0
                backgroundColor: 'violet',
            }
        }}
    >
        <Stack.Screen name='ProductsScreen' component={ProductsScreen} options={{title: 'Productos'}}/>
        <Stack.Screen name='ProductScreen' component={ProductScreen} options={{title: 'Producto'}}/>
    </Stack.Navigator>
  )
}



export default ProductsNavigation