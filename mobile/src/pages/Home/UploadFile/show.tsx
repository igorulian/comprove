import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView,Text, View, Image, TouchableOpacity, ScrollView, ActivityIndicator, Alert, FlatList } from 'react-native';
import BackButton from '../../../components/backButton';
import {styles} from './../../ShowFIle/styles'
import Pdf from 'react-native-pdf';
import { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Category } from '../../PerDate/file';
import DatePicker from 'react-native-date-picker'
import { useContext } from 'react';
import AuthContext, { AuthContextData, ICategory } from '../../../context/auth';
import api, { authorizaton } from '../../../services/api';
import { DocumentPickerResponse } from 'react-native-document-picker';

interface UploadingFile {
    uri:string,
    mimetype:string,
    size:string
}

interface Props {
    file: DocumentPickerResponse;
}

interface ISelectableCategory {
    name: string,
    color: string
}

interface IRemoveBtnProps {
    goBack: Function
}


const ShowFile:React.FC<Props> = ({file}: Props) => {
    const currentDate = new Date()
    const fileSource = {uri: file.uri};

    const [loading,setLoading] = useState(false)
    const [category,setCategory] = useState('')
    const [date, setDate] = useState(currentDate)
    const {user,token} = useContext<AuthContextData>(AuthContext)
    const navigation = useNavigation()

    const categories:ICategory[]|undefined = user?.categories

    async function uploadFile(){
        setLoading(true)
        const fileData = new FormData()
        const {name,uri,type} = file
        const uploadingFileData:any = {name,uri,type}
        fileData.append('file', uploadingFileData, file.name)  

        await api.post(`/upload/?category=${category}&createdAt=${date}}`, fileData ,authorizaton(token))
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

            <View style={styles.fileContainer}>

                {file.type.includes('image') ? 
                <Image 
                    style={styles.fileContent} 
                    source={fileSource}
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
                    maximumDate={new Date(`${date.getFullYear()}-2-31`)}
                    minimumDate={new Date(`${date.getFullYear()}-1-1`)}
                />
            </View>

            <TouchableOpacity style={styles.btnSave} onPress={() =>{uploadFile()}}>
                {!loading ? 
                    <Text style={styles.btnSaveText}> ENVIAR </Text>
                :
                    <ActivityIndicator size='small' color='#fff'/>
                }
            </TouchableOpacity>
        </ScrollView>
    )
}

export default ShowFile