import React from 'react';
import { useState } from 'react';
import { SafeAreaView, Text, View, TextInput, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from '../Add/styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Alert } from 'react-native';
import { useContext } from 'react';
import AuthContext, { ICategory } from '../../../context/auth';
import api, { authorizaton } from '../../../services/api';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import {colors, colors2} from '../colors'

interface ColorProps {
    color: string,
    selectedColor: string,
    setSelectedColor(color:string): void
}

type IParams = {
    Props: {
        category: ICategory;
    };
}


const Color:React.FC<ColorProps> = ({color,selectedColor,setSelectedColor}:ColorProps) => {
    const isTheSelectedColor:boolean = (color === selectedColor)

    return(
        <TouchableOpacity style={{...styles.color, backgroundColor: color,}} 
            onPress={() => {setSelectedColor(color)}}>

            {!isTheSelectedColor && 
                <View style={styles.colorBlur}/>
            }

            {isTheSelectedColor &&
                <MaterialCommunityIcons name="check" color={'#fff'} size={30} />
            }
        </TouchableOpacity>
    )

}


const EditCategory:React.FC = () => {
    const route = useRoute<RouteProp <IParams, 'Props'>>();
    const category = route.params.category

    const [selectedColor, setSelectedColor] = useState<string>(category.color)
    const [name, setName] = useState<string>(category.name)
    const [loading, setLoading] = useState<boolean>(false)
    const {token, updateUserCategories} = useContext(AuthContext)
    const navigation = useNavigation()


    function goToCategoriesList(){
        navigation.goBack()
    }

    async function handleEditRequest(){
        setLoading(true)
        const request = {
            name,
            color: selectedColor
        }
        await api.post(`/category/edit/${category.name}`,request,authorizaton(token))
        .then(async (response) => {

            const updatedCategories:ICategory[] = response.data
            await updateUserCategories(updatedCategories)

            goToCategoriesList()
            setLoading(false)
        })
        .catch((error) => {
            Alert.alert('Ops!', error.response.data.error)
            setLoading(false)
        })  
    }

    function editCategory(){
        if(!name || ! selectedColor)
            return Alert.alert('Ops!', 'Preencha todos os campos')
        
        if(!selectedColor.includes('#'))
            return Alert.alert('Ops!', 'Ocorreu um erro na criação da categoria')

        handleEditRequest()
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.inputContainer}>
                <Text style={styles.inputname}> Nome: </Text>
                <TextInput
                style={styles.input}
                defaultValue={category.name}
                placeholder='Digite o nome da categoria'
                onChangeText={(txt:string) => {setName(txt)}}
                />
            </View>

            <View style={styles.colorInputContainer}>
                <Text style={styles.inputname}> Cor: </Text>
                
                <FlatList
                    horizontal     
                    contentContainerStyle={{alignSelf: 'flex-start'}}
                    numColumns={1}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item}
                    data={colors}
                    style={{height: 56, flexGrow: 0}}
                    renderItem={({ item }: { item: string }) => (
                        <Color 
                        color={item} 
                        selectedColor={selectedColor} 
                        setSelectedColor={(color) => {setSelectedColor(color)}}/>
                    )
                }
                />
                <FlatList
                    horizontal     
                    contentContainerStyle={{alignSelf: 'flex-start'}}
                    numColumns={1}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item}
                    data={colors2}
                    style={{height: 56, flexGrow: 0}}
                    renderItem={({ item }: { item: string }) => (
                        <Color 
                        color={item} 
                        selectedColor={selectedColor} 
                        setSelectedColor={(color) => {setSelectedColor(color)}}/>
                    )
                }
                />
            </View>

            <TouchableOpacity style={styles.btnCriar} onPress={() => {editCategory()}}>
                <Text style={styles.btnCriarTxt}> 
                {loading ? <ActivityIndicator size={'small'} color='#fff'/> : 'SALVAR'} 
                </Text>
            </TouchableOpacity>
        </SafeAreaView>

    )
}

export default EditCategory