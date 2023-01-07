import React, { createContext, useReducer } from 'react'
import cafeApi from '../api/cafeApi'
import { IUsuario, LoginData, LoginResponse } from '../interfaces/appInterface'
import { authReducer, AuthState } from './authReducer'

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
    
    const singIn       = async ({email, password}: LoginData) => {

        try {
            const { data } = await cafeApi.post<LoginResponse>('/auth/login', { email, password})

            dispatch({
                type: 'singUp',
                payload: {
                    user: data.usuario,
                    token: data.token,
                }
            })

        } catch (error) {
            console.log(error)
        }

    }


    const singUp        = () => {}
    const logOut        = () => {}
    const removeError   = () => {}

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