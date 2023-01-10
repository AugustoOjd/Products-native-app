import React, { useEffect, useState } from "react"
import cafeApi from '../api/cafeApi';
import { Product } from '../interfaces/appInterface';


export const useCategories = () => {

    const [categories, setCategories] = useState<Product[]>([])



    useEffect(() => {
        getCategories()
    }, [])
    
    const getCategories = async () => {
        const resp = await cafeApi.get('/products')
        setCategories(resp.data)
    }

    return {

    }
}