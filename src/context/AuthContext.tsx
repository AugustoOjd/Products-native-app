import React, { createContext, useReducer } from 'react'
import { IUsuario } from '../interfaces/appInterface'
import { authReducer, AuthState } from './authReducer'

type AuthContextProps = {
    errorMessage: string
    token: string | null
    user: IUsuario | null
    status: 'cheking' | 'authenticated' | 'not-authenticated'
    singUp: () => void
    singIn: () => void
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
    
    const singUp        = () => {}
    const singIn        = () => {}
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