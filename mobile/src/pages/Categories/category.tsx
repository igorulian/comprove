import React from 'react';
import { Alert, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import AuthContext, { ICategory } from '../../context/auth';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import api, { authorizaton } from '../../services/api';
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

interface Props {
    category: ICategory
}



const Category:React.FC<Props> = ({category}: Props) => {
    const {token, updateUserCategories} = useContext(AuthContext)
    const [removeLoading, setRemoveLoading] = useState(false)
    const navigation = useNavigation()

    async function removeCategoryConfirmation() {
    
        Alert.alert("Deseja remover a categoria?","Todos os arquivos ligados a ela perderão sua ligação",
        [{
            text: "Cancelar",
            style: "cancel",
        },
        {
            text: "Remover",
            style: "default",
            onPress: async () =>  { 
                await removeCategory()
            }
        }]
        ,{ cancelable: true })
    }
    

    async function removeCategory(){
        setRemoveLoading(true)
        await api.post(`/category/remove/${category.name}`,{},authorizaton(token))
        .then(async (response) => {
            const UpdatedCategories:ICategory[] = response.data
            await updateUserCategories(UpdatedCategories)
            setRemoveLoading(false)
        })
        .catch((error) => { 
            Alert.alert('Ops!', `${error.response.data.error}`)
            setRemoveLoading(false)
        })
    }

    async function editCategory() {
        navigation.navigate('edit', {category: category})
    }

    return (
        <View style={styles.categoryContainer}>
            <View style={styles.categoryInfo}>
                <MaterialCommunityIcons name="folder-open" color={category.color} size={30}/>
                <Text style={styles.categoryName}> {`${category.name}`}</Text>
            </View>
            <View style={styles.categoryButtons}>
                <TouchableOpacity onPress={() => {editCategory()}}>    
                    <MaterialCommunityIcons name="pencil" color={'#0b465e'} size={30}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {removeCategoryConfirmation()} }>    
                {removeLoading ? <ActivityIndicator size={30} color={'#ff0000'}/> : <MaterialCommunityIcons name="close" color={'#ff0000'} size={30}/>}
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Category