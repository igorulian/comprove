import React from 'react'
import { useContext } from 'react'
import {Text,SafeAreaView, FlatList, TouchableOpacity, Alert} from 'react-native'
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
    const [refreshing, setRefresh] = useState(false)
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
            <FlatList
                data={categories}
                numColumns={1}
                keyExtractor={item => item._id}
                renderItem={({ item }: { item: ICategory }) => <Category category={item}/>}
                onRefresh={() => {refreshCategories()}}
                refreshing={refreshing}
            />
            <AddButton/>
        </SafeAreaView>
    )
}

export default Categories