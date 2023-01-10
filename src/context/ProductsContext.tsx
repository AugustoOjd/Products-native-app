import { createContext, useEffect, useState } from 'react';
import cafeApi from '../api/cafeApi';
import { Product } from "../interfaces/appInterface";



type ProductsContextProps = {
    products:       Product[]
    loadProducts:   ()=> Promise<void>
    addProduct:     (categoryName: string, productName: string)=>Promise<void> 
    updateProduct:  (categoryName: string, productName: string, productId: string)=>Promise<void>
    deleteProduct:  (productId: string)=>Promise<void>
    loadProductById:(productId: string)=>Promise<Product>
    upLoadImage:    (data: any, productId: string) => Promise<void>
}


export const ProductsContext = createContext({} as ProductsContextProps)

export const ProductsProvider = ({children}: any)=>{

    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
      loadProducts()
    }, [])
    

    const loadProducts      = async ()=> {

        const resp = await cafeApi.get('/products?limit=5')

        setProducts([...products, ...resp.data])
        // console.log(resp.data)
    }


    const addProduct        = async (categoryName: string, productName: string)=>{
        console.log('addProduct')
        console.log({categoryName,  productName})
    } 
    const updateProduct     = async (categoryName: string, productName: string, productId: string)=>{

        console.log('updateProduct')
        console.log({categoryName, productName, productId})
    }
    
    
    
    const deleteProduct     = async (productId: string)=>{}
    
    const loadProductById   = async (productId: string)=>{ 
        
        const resp = await cafeApi.get(`/products/${productId}`)

        return resp.data
    }
    const upLoadImage       = async  (data: any, productId: string) => {}

    return (
        <ProductsContext.Provider value={{
            products,
            loadProducts,   
            addProduct,     
            updateProduct,  
            deleteProduct,  
            loadProductById,
            upLoadImage    
        }}>
            {children}
        </ProductsContext.Provider>
    )
}