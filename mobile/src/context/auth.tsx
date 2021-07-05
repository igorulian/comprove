import AsyncStorage from "@react-native-community/async-storage";
import React, { createContext, useEffect } from "react";
import { useState } from "react";
import { AuthRoutes } from "../routes/auth.routes";
import Loading from "../components/loading";
import { TabRoutes } from "../routes/routes";

interface AuthContextData {
    signed: boolean,
    token: string|null,
    email: string|null,
    loading: boolean,
    signIn(token:string, email:string): void,
    signOut(): void
}

const AuthContext = createContext<AuthContextData>({ } as AuthContextData)

export const AuthProvider:React.FC = ({children}) => {
    const [signed, setSigned] = useState<boolean>(false)
    const [token, setToken] = useState<string|null>(null)
    const [email, setEmail] = useState<string|null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const checkToken = async() =>{
          const storageToken = await AsyncStorage.getItem('@comprove:token')
          const storageEmail = await AsyncStorage.getItem('@comprove:email')
          const hasToken = (token === null) ? true : false
      
          setSigned(hasToken)
          setToken(storageToken)
          setEmail(storageEmail)
          setLoading(false)
        }
    
        checkToken()
      },[])

    async function signIn(token:string, email:string){
        await AsyncStorage.setItem('@comprove:token', token)
        await AsyncStorage.setItem('@comprove:email', email)

        setSigned(true)
        setToken(token)
        setEmail(email)
    }

    async function signOut(){
        setSigned(false)
        setToken(null)
        setEmail(null)
    }

    if(loading)
        return <Loading/>

    return (
        <AuthContext.Provider value={{signed, token, loading, email, signIn, signOut}}>
            {children}
            {signed ? <TabRoutes/> : <AuthRoutes/>}
        </AuthContext.Provider>
    )
}

export default AuthContext