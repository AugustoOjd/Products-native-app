import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useContext } from 'react'
import { ProductsContext } from '../context/ProductsContext'
import { TouchableOpacity } from 'react-native-gesture-handler'


const ProductsScreen = () => {

    const { products } = useContext(ProductsContext)

    // FALTA pull to refresh

    return (
    <View style={styles.container}>
    
        <FlatList
            data={products}
            keyExtractor={ (p) => (JSON.stringify(p.id)) }
            renderItem={ ({item}) => ( 
                <TouchableOpacity
                    activeOpacity={0.8}
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
        marginHorizontal: 12
    },
    itemSeparator: {
        marginVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.2)'
    }
})