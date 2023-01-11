import { createContext, useEffect, useState } from 'react';
import cafeApi from '../api/cafeApi';
import { Product } from "../interfaces/appInterface";



type ProductsContextProps = {
    products:       Product[]
    loadProducts:   ()=> Promise<void>
    addProduct:     (categoryName: string, productName: string, prductPrice: string)=>Promise<Product> 
    updateProduct:  (categoryName: string, productName: string, productId: string, prductPrice: string)=>Promise<void>
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

        const resp = await cafeApi.get('/products?limit=10')

        setProducts([...resp.data])  
        // console.log(resp.data)
    }


    const addProduct        = async (categoryName: string, productName: string, prductPrice: string):Promise<Product>=>{
        

        const resp = await cafeApi.post<Product>('/products', {
            name: productName,
            price: prductPrice,
            category: categoryName
        })

        setProducts([...products, resp.data])

        return resp.data
    } 
    const updateProduct     = async (categoryName: string, productName: string, productId: string, prductPrice: string)=>{

        const resp = await cafeApi.put<Product>(`/products/${productId}`, {
            name: productName,
            price: prductPrice,
            category: categoryName
        })
        setProducts( products.map( prod => {
            return (prod.id?.toString() === productId) ? resp.data : prod
        }))
    }
    
    
    
    const deleteProduct     = async (productId: string)=>{

        const resp = await cafeApi.delete(`/products/${productId}`)

        return resp.data
    }
    
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