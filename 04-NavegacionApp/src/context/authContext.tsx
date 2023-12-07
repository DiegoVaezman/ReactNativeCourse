import React, { createContext, useReducer } from "react"
import { authReducer } from './authReducer';


// Definir qué información tendré aquí
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

// Estado inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined
}

// Lo usaremos para decirle a React cómo luce y qué expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    logOut: () => void;
    setUserName: (name: string) => void;
}

// Crear el context
export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado
export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer( authReducer, authInitialState)

    const signIn = () => {
        dispatch({ type: 'signIn' })
    }

    const changeFavoriteIcon = ( iconName: string ) => {
        dispatch({ type: 'chancheFavIcon', payload: iconName })
    }

    const logOut = () => {
        dispatch({ type: 'logout'})
    }

    const setUserName = ( name: string ) => {
        dispatch({type: 'setUserName', payload: name})
    }

    return (
        <AuthContext.Provider value={{
            authState: authState,
            signIn,
            changeFavoriteIcon,
            logOut,
            setUserName
        }}>
            { children }
        </AuthContext.Provider>
    )
}
