import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView, ActivityIndicator, Alert } from 'react-native';
import BackButton from '../../components/backButton';
import { IFile } from '../PerDate';
import {styles} from './styles'
import Pdf from 'react-native-pdf';
import { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Category } from '../PerDate/file';
import DatePicker from 'react-native-date-picker'
import { useContext } from 'react';
import AuthContext, { AuthContextData, ICategory } from '../../context/auth';
import api, { authorizaton } from '../../services/api';

type IParams = {
    Props: {
        file: IFile;
    };
}

interface ISelectableCategory {
    name: string,
    color: string
}

interface IRemoveBtnProps {
    file: IFile,
    token: string|null,
    goBack: Function
}

async function shareFile(){
}


async function removeRequest(file:IFile, token:string|null, goBack:Function){

    await api.delete(`/remove/${file._id}`, authorizaton(token))
    .then(() => {
        Alert.alert('Sucesso', 'Arquivo removido com sucesso')
        goBack()
    })
    .catch((error) => {
        Alert.alert('Ops!', error.response.data.error )
    })  
}

async function removeFile(file:IFile, token:string|null, goBack:Function) {
    
    Alert.alert("Confirmação","Deseja remover o arquivo?",
    [{
        text: "Cancelar",
        style: "cancel",
    },
    {
        text: "Remover",
        style: "default",
        onPress: async () =>  { 
            await removeRequest(file,token,goBack)
        }
    }]
    ,{ cancelable: true })
}

const RemoveButton:React.FC<IRemoveBtnProps> = ({file,token,goBack}:IRemoveBtnProps) => {
    return(
        <TouchableOpacity style={styles.closeButton} onPress={() => {removeFile(file,token,goBack)}}>
            <MaterialCommunityIcons name='delete-outline' size={30} color={'#ff0000'}/>
        </TouchableOpacity>
    )
}

const ShowFile:React.FC = () => {
    const route = useRoute<RouteProp <IParams, 'Props'>>();
    const file = route.params.file
    const fileDate = new Date(file.createdAt)
    const fileSource = {uri:file.location};

    const [loading,setLoading] = useState(false)
    const [category,setCategory] = useState(file.category)
    const [date, setDate] = useState(fileDate)
    const {user,token} = useContext<AuthContextData>(AuthContext)
    const navigation = useNavigation()

    const categories:ICategory[]|undefined = user?.categories

    async function updateFile(){
        setLoading(true)
        const req = {
            createdAt: date,
            category,
        }   

        await api.post(`/edit/${file._id}`, req ,authorizaton(token))
        .then(() => {
            navigation.goBack()
        }).catch((error) => {
            Alert.alert('Ops!', `${error.response.data.error}`)
        })

        setLoading(false)
    }

    const SelectableCategory:React.FC<ISelectableCategory> = ({name,color}:ISelectableCategory) => (
        <TouchableOpacity onPress={() => {setCategory(name)}}>
            <Category name={name} color={category === name ? color : '#ccc'}/>
        </TouchableOpacity>
    )


    return (
        <ScrollView>
            <BackButton/>
            <RemoveButton file={file} token={token} goBack={() => {navigation.goBack()}}/>
            <View style={styles.fileContainer}>

                <TouchableOpacity style={styles.shareButton} onPress={() => {shareFile()}}>
                    <MaterialCommunityIcons name="share-circle" color={'#0b465e'} size={50}/>
                </TouchableOpacity>

                {file.mimetype.includes('image') ? 
                <Image 
                    style={styles.fileContent} 
                    source={{uri: file.location}}
                    onLoad={() => {setLoading(false)}}
                />
                :
                <Pdf
                    source={fileSource}
                    onLoadProgress={(percent) => {
                        if(percent >= 1)
                            setLoading(false)
                    }}
                    activityIndicatorProps={{ 
                        color:'#f78139',
                        progressTintColor:'#f78139'
                    }}

                    style={styles.fileContent} 
                /> 
                }
            </View>
            
            <View style={styles.fileInfoContainer}>
                <Text style={styles.fileInfoText}> Categoria:</Text>
                
                <View style={styles.categoryContainer}>
                    <ScrollView 
                        horizontal 
                        style={styles.categoryScrollView}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                    >
                        {
                            categories?.map(category => (
                                <SelectableCategory key={category._id} name={category.name} color={category.color}/>
                            ))
                        }
                    </ScrollView>
                </View>

                <Text style={styles.fileInfoText}> Data:</Text>

                <DatePicker
                    date={date}
                    onDateChange={setDate}
                    style={styles.datePicker}
                    androidVariant={'nativeAndroid'}
                    locale={'pt_BR'}
                    mode={'date'}
                    maximumDate={new Date(`${fileDate.getFullYear()}-12-31`)}
                    minimumDate={new Date(`${fileDate.getFullYear()}-1-1`)}
                />
            </View>

            <TouchableOpacity style={styles.btnSave} onPress={() =>{updateFile()}}>
                {!loading ? 
                    <Text style={styles.btnSaveText}> SALVAR </Text>
                :
                    <ActivityIndicator size='small' color='#fff'/>
                }
            </TouchableOpacity>
        </ScrollView>
    )
}

export default ShowFile