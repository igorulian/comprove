import React from 'react'
import { useContext } from 'react'
import {Text,SafeAreaView, FlatList, TouchableOpacity} from 'react-native'
import AuthContext, { ICategory } from '../../context/auth'
import styles from './styles'
import Category from './category'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const Categories:React.FC = () =>{
    const {user} = useContext(AuthContext)
    const categories = user?.categories
    const navigation = useNavigation()

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
                renderItem={({ item }: { item: ICategory }) => <Category category={item}/> }
            />
            <AddButton/>
        </SafeAreaView>
    )
}

export default Categories