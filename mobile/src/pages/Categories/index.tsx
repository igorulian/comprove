import React from 'react'
import { useContext } from 'react'
import {Text,SafeAreaView, FlatList, TouchableOpacity, Alert, ScrollView, RefreshControl} from 'react-native'
import AuthContext, { ICategory } from '../../context/auth'
import styles from './styles'
import Category from './category'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import api, { authorizaton } from '../../services/api'

const Categories:React.FC = () =>{
    const {user} = useContext(AuthContext)
    const categories = user?.categories
    const navigation = useNavigation()
    const [refreshing, setRefresh] = useState<boolean>(false)
    const {token,updateUserCategories} = useContext(AuthContext)

    async function refreshCategories(){
        setRefresh(true)
        await api.get('/data', authorizaton(token))
        .then(async (response) => {
            const updatedCategories = response.data.categories
            await updateUserCategories(updatedCategories)
        })
        .catch((error) => {
            Alert.alert('Ops!', `${error.response.data.error}`)
        })

        setRefresh(false)
    }

    function goToAdd(){
        navigation.navigate('add')
    }

    function AddButton(){
        return (
            <TouchableOpacity style={styles.addButton} onPress={() => {goToAdd()}}>
                <Text style={styles.buttonText}> ADICIONAR </Text>
            </TouchableOpacity>
        )
    }

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView
            refreshControl={
                <RefreshControl
                refreshing={refreshing}
                onRefresh={refreshCategories}
                />
            }>
            
                {categories.map(category => (
                    <Category key={category._id} category={category}/>
                ))}
            
            <AddButton/> 
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default Categories