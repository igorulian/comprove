import AsyncStorage from "@react-native-community/async-storage";
import React, { createContext, useEffect } from "react";
import { useState } from "react";
import { AuthRoutes } from "../routes/auth.routes";
import Loading from "../components/loading";
import { TabRoutes } from "../routes/routes";

interface ICategory {
    name: string,
    color: string,
    _id: string
}

interface IUser {
    avatarUrl: string,
    _id: string,
    categories: ICategory[]
}

interface AuthContextData {
    signed: boolean,
    token: string|null,
    user: IUser|null,
    loading: boolean,
    signIn(token:string, user:IUser): void,
    signOut(): void
}

const AuthContext = createContext<AuthContextData>({ } as AuthContextData)

export const AuthProvider:React.FC = ({children}) => {
    const [signed, setSigned] = useState<boolean>(false)
    const [token, setToken] = useState<string|null>(null)
    const [user, setUser] = useState<IUser|null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const checkToken = async() =>{
          const storageToken = await AsyncStorage.getItem('@comprove:token')
          const storageUser = await AsyncStorage.getItem('@comprove:user')
          const hasToken = storageToken ? true : false

      
          setSigned(hasToken)
          setToken(storageToken)
          setUser(storageUser ? JSON.parse(storageUser) : null)
          setLoading(false)
        }
    
        checkToken()
      },[])

    async function signIn(token:string, user:IUser){
        await AsyncStorage.setItem('@comprove:token', token)
        await AsyncStorage.setItem('@comprove:user', JSON.stringify(user))

        setSigned(true)
        setToken(token)
        setUser(user)
    }

    async function signOut(){
        setSigned(false)
        setToken(null)
        setUser(null)
        await AsyncStorage.removeItem('@comprove:token')
        await AsyncStorage.removeItem('@comprove:user')
    }

    if(loading)
        return <Loading/>

    return (
        <AuthContext.Provider value={{signed, token, loading, user, signIn, signOut}}>
            {children}
            {signed ? <TabRoutes/> : <AuthRoutes/>}
        </AuthContext.Provider>
    )
}

export default AuthContext