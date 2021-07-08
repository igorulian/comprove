import React from 'react'
import { useContext } from 'react'
import {Text,SafeAreaView, FlatList, TouchableOpacity} from 'react-native'
import AuthContext, { ICategory } from '../../context/auth'
import styles from './styles'
import Category from './category'

function Categories(){

    const {user} = useContext(AuthContext)
    const categoies = user?.categories

    function AddButton(){
        return (
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.buttonText}> ADICIONAR </Text>
            </TouchableOpacity>
        )
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}> CATEGORIAS </Text>
            <FlatList
                data={categoies}
                numColumns={1}
                keyExtractor={item => item._id}
                renderItem={({ item }: { item: ICategory }) => <Category category={item}/> }
            />
            <AddButton/>
        </SafeAreaView>
    )
}

export default Categories