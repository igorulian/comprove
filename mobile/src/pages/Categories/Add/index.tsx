import React from 'react';
import { useState } from 'react';
import { SafeAreaView, Text, View, TextInput, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from './styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Alert } from 'react-native';
import { useContext } from 'react';
import AuthContext, { ICategory } from '../../../context/auth';
import api, { authorizaton } from '../../../services/api';
import { useNavigation } from '@react-navigation/native';
import {colors, colors2} from '../colors'

interface ColorProps {
    color: string,
    selectedColor: string,
    setSelectedColor(color:string): void
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

const AddCategory:React.FC = () => {
    const [selectedColor, setSelectedColor] = useState<string>(colors[0])
    const [name, setName] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const {token, updateUserCategories} = useContext(AuthContext)
    const navigation = useNavigation()


    function goToCategoriesList(){
        navigation.goBack()
    }

    async function handleCreateRequest(){
        setLoading(true)
        const request = {
            name,
            color: selectedColor
        }
        await api.post('/category/add',request,authorizaton(token))
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

    function createCategory(){
        if(!name || ! selectedColor)
            return Alert.alert('Ops!', 'Preencha todos os campos')
        
        if(!selectedColor.includes('#'))
            return Alert.alert('Ops!', 'Ocorreu um erro na criação da categoria')

        if(name.length > 9)
            return Alert.alert('Ops!', 'Tente digitar uma nome mais curto')

        handleCreateRequest()
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.inputContainer}>
                <Text style={styles.inputname}> Nome: </Text>
                <TextInput
                style={styles.input}
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

            <TouchableOpacity style={styles.btnCriar} onPress={() => {createCategory()}}>
                <Text style={styles.btnCriarTxt}> 
                {loading ? <ActivityIndicator size={'small'} color='#fff'/> : 'CRIAR'} 
                </Text>
            </TouchableOpacity>
        </SafeAreaView>

    )
}

export default AddCategory