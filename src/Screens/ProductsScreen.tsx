import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { ProductsContext } from '../context/ProductsContext'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { StackScreenProps } from '@react-navigation/stack'
import { ProductsStackParams } from '../Navigation/ProductsNavigation'

interface Props extends StackScreenProps<ProductsStackParams, 'ProductsScreen'> {}

const ProductsScreen = ({navigation}:Props) => {

    const { products } = useContext(ProductsContext)

    useEffect(() => {
      
        navigation.setOptions({
            headerRight: () => ( 
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={ () => navigation.navigate('ProductScreen', {
                    newName: 'Nuevo producto'
                })}
            >
                <Text style={{marginRight: 15}}>Agregar</Text>
            </TouchableOpacity>)
        })

    }, [])
    

    // FALTA pull to refresh

    return (
    <View style={styles.container}>
    
        <FlatList
            style={{marginTop: 15}}
            data={products}
            keyExtractor={ (p) => (JSON.stringify(p.id)) }
            renderItem={ ({item}) => ( 
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={ () => navigation.navigate('ProductScreen', {
                        id: (item.id.toString()),
                        newName: item.name
                    })}
                >
                    <Text>{item.name}</Text>
                </TouchableOpacity>
                )}

            ItemSeparatorComponent={ ()=> (
                <View style={ styles.itemSeparator}/>
            )}
        />
    </View>
  )
}

export default ProductsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 12,
    },
    itemSeparator: {
        marginVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.2)'
    }
})