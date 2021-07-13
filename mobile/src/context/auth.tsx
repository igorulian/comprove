import AsyncStorage from "@react-native-community/async-storage";
import React, { createContext, useEffect } from "react";
import { useState } from "react";
import { AuthRoutes } from "../routes/auth.routes";
import Loading from "../components/loading";
import { TabRoutes } from "../routes/routes";
import RNBootSplash from "react-native-bootsplash";

export interface ICategory {
    name: string,
    color: string,
    _id: string
}

export interface IUser {
    avatarUrl: string|undefined,
    _id: string|undefined,
    categories: ICategory[]
}

export interface AuthContextData {
    signed: boolean,
    token: string|null,
    user: IUser|null,
    loading: boolean,
    signIn(token:string, user:IUser): void,
    signOut(): void,
    updateUserCategories(categories:ICategory[]):Promise<void>,
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
          await RNBootSplash.hide({fade: true});
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

    async function updateUserCategories(categories:ICategory[]){
        const newCategories:ICategory[] = categories
        const updatedUser:IUser = {
            avatarUrl: user?.avatarUrl,
            _id: user?._id,
            categories: newCategories
        }
        await AsyncStorage.setItem('@comprove:user', JSON.stringify(updatedUser))
        setUser(updatedUser)
    }

    if(loading)
        return <Loading/>

    return (
        <AuthContext.Provider value={{signed, token, loading, user, signIn, signOut, updateUserCategories}}>
            {children}
            {signed ? <TabRoutes/> : <AuthRoutes/>}
        </AuthContext.Provider>
    )
}

export default AuthContext