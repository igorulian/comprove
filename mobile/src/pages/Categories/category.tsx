import React from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import AuthContext, { ICategory } from '../../context/auth';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import api, { authorizaton } from '../../services/api';
import { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { cos } from 'react-native-reanimated';

interface Props {
    category: ICategory
}

async function removeCategory(category:ICategory, token:string|null){

    await api.post(`/category/remove/${category.name}`,{},authorizaton(token))
    .then(() => {
        Alert.alert('Sucesso!', 'Categoria removida com sucesso')
    })
    .catch((error) => { 
        Alert.alert('Ops!', `${error.response.data.error}`)
    })
}


const Category:React.FC<Props> = ({category}: Props) => {
    const {token} = useContext(AuthContext)

    return (
        <View style={styles.categoryContainer}>
            <View style={styles.categoryInfo}>
                <MaterialCommunityIcons name="folder-open" color={category.color} size={30}/>
                <Text style={styles.categoryName}> {`${category.name}`}</Text>
            </View>
            <View style={styles.categoryButtons}>
                <TouchableOpacity>    
                    <MaterialCommunityIcons name="pencil" color={'#0b465e'} size={30}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {removeCategory(category,token)} }>    
                    <MaterialCommunityIcons name="close" color={'#ff0000'} size={30}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Category