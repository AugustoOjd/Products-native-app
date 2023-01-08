import React, { createContext, useEffect, useReducer } from 'react'
import cafeApi from '../api/cafeApi'
import { IUsuario, LoginData, LoginResponse } from '../interfaces/appInterface'
import { authReducer, AuthState } from './authReducer'
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextProps = {
    errorMessage: string
    token: string | null
    user: IUsuario | null
    status: 'cheking' | 'authenticated' | 'not-authenticated'
    singUp: () => void
    singIn: (loginData: LoginData) => void
    logOut: () => void
    removeError: () => void
}

const authInitialState: AuthState = {
    status: 'cheking',
    token: null,
    user: null,
    errorMessage: ''
}

export const AuthContext = createContext({} as AuthContextProps)


export const AuthProvider = ({ children}: any ) => {

    const [ state, dispatch] = useReducer(authReducer, authInitialState)

    const checkToken = async () =>{
        const token = await AsyncStorage.getItem('x-token')
        // Validar token
        if(!token) return dispatch({ type: 'notAuthenticated'})

        // Hay token
        const { data } = await cafeApi.get('/auth')
        if( data.error ){
            return dispatch({ type: 'notAuthenticated'})
        }

        // await AsyncStorage.setItem('x-token', resp.data.token)
            dispatch({ 
                type: 'singUp',
                payload: {
                    token: data.token,
                    user: data.usuario
                }
            })


        
    } 

    useEffect(() => {
      checkToken()
    }, [])
    
    
    const singIn       = async ({email, password}: LoginData) => {

        try {
            const { data } = await cafeApi.post<LoginResponse>('/auth/login', { email, password})
            
            if( data.error){
                return dispatch({
                    type: 'addError',
                    payload: data.error || 'informacion incorrecta'
                })
            }

            dispatch({
                type: 'singUp',
                payload: {
                    user: data.usuario,
                    token: data.token,
                }
            })

            await AsyncStorage.setItem('x-token', data.token)

        } catch (error) {
            console.log(error)
            // dispatch({ 
            //     type: 'addError', 
            //     payload: ''})
        }

    }


    const singUp        = () => {}
    const logOut        = () => {}
    
    
    const removeError   = () => {

        dispatch({ type: 'removeError'})
    }

    return (
        <AuthContext.Provider value={{
            ...state,
            singUp,     
            singIn,    
            logOut,    
            removeError
        }}>
            {children}
        </AuthContext.Provider>
    )
}