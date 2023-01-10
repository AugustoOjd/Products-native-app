import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import React, { useContext, useEffect, useState } from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { ProductsStackParams } from '../Navigation/ProductsNavigation';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker';
import { useForm } from '../hooks/useForm';
import { ProductsContext } from '../context/ProductsContext';

interface Props extends StackScreenProps<ProductsStackParams, 'ProductScreen'> {}

const ProductScreen = ({ route, navigation }:Props) => {

  const { id = '', newName = 'Nuevo Producto'} = route.params

  const { loadProductById, addProduct, updateProduct } = useContext(ProductsContext)
  // const [selectedLanguage, setSelectedLanguage] = useState();

  const { _id, name, price, category, img, form, onChange, setFormValue} = useForm({
    
    _id: id,
    name: newName,
    price: '',
    category: '',
    img: '',

  })

  useEffect(() => {
  
    navigation.setOptions({
      title: name
    })

  }, [name])

  useEffect(() => {
    loadProduct()
  }, [])
  

  const loadProduct = async () => {
    if( id.length === 0) return

    const product = await loadProductById(id)
    setFormValue({
      _id: id,
      category: product.category,
      img: product.img || '',
      price: product.price,
      name: name
    })
  }

  const saveOrUpdate = () => {

    if(id.length > 0){
      console.log('actualizar')
      updateProduct(category, name, id)
    }else{
      console.log('crear')
      
      const tempCategory = category || 'cellphone'
      addProduct(tempCategory, name)
    }
  }


  return (
    <View style={styles.container}>
      
      <ScrollView>
        <Text style={styles.title}> Nombre del Producto: </Text>

        <TextInput
          placeholder='Producto'
          style={styles.textInput}
          value={name}
          onChangeText={(value) => onChange(value, 'name')}
        />


      {/* Picker */}
      <Text style={styles.title}> Categoria: </Text>
      
      <Picker
        selectedValue={category}
        onValueChange={(itemValue ) => onChange( itemValue, 'category')}
        >

        {/* <Picker.Item label="Select" /> */}
        <Picker.Item label="Cellphone" value="cellphone" />
        <Picker.Item label="Tablet" value="tablet" />
        <Picker.Item label="Smartwatch" value="smartwatch" />
      </Picker>


      <Button
        title='Guardar'
        onPress={() => saveOrUpdate() }
        color='#5856D6'
      />

      <View
        style={{
          // backgroundColor: 'red',
          height: 'auto',
          flexDirection: 'row', 
          justifyContent: 'space-evenly', 
          marginTop: 20}}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          style={ styles.iconBtn}
        >
          <Icon 
            name='camera-outline'
            size={30}
            color='#5856D6'
          />
        </TouchableOpacity>

        <TouchableOpacity 
            activeOpacity={0.8}
            style={styles.iconBtn}>
          <Icon 
            name='image-outline'
            size={30}
            color='#5856D6'
          />
        </TouchableOpacity>

      </View>

          {

            img.length > 0
            ?
            <Image
            source={{
              uri: img
            }}
            style={{
              marginVertical: 15,
              width: '100%',
              height: 250
            }}
          />
          :
          <Image
              source={{
                uri: 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png'
              }}
              style={{
                marginVertical: 15,
                width: '100%',
                height: 250
              }}
            />

          }


      
      <Text>{ JSON.stringify(form, null, 2)}</Text>

      </ScrollView>
      
      {/* <Text>{id} {name}</Text> */}

    </View>
  )
}

export default ProductScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 12
    },
    title: {
      marginVertical: 10,
      fontSize: 20
    },
    textInput: {
      paddingHorizontal: 15,
      borderWidth: 1,
      borderColor: 'rgba(0, 0, 0, 0.2)',
      borderRadius: 15
    },
    iconBtn: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 30,
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