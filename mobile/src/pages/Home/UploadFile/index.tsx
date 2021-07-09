import React from 'react';
import { useState, useEffect } from 'react';
import { Alert, SafeAreaView, Text, View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';
import Loading from '../../../components/loading'
import ShowFile from './show';

type IParams = {
    Props: {
        from: string;
    };
}

function pickFileFromCamera(){
    return null
}

async function pickFileFromGalery(){
    try {
        const file = await DocumentPicker.pick({
            type: [DocumentPicker.types.images, DocumentPicker.types.pdf],
        });

        const {uri,type,size} = file

        const maxSize = 20 * 1024 * 1024
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'application/pdf'
        ]

        if(!allowedMimes.includes(type)){
            Alert.alert('Ops!', 'Arquivo não suportado')
            return null
        }
        if(size >= maxSize){
             Alert.alert('Ops!', 'Arquivo muito grande! tente um menor!')
             return null
        }

        return file

    }catch {
        return null
    }
}

const UploadFile:React.FC = () => {
    const route = useRoute<RouteProp <IParams, 'Props'>>()
    const from = route.params.from
    const [file,setFile] = useState<DocumentPickerResponse | null>(null)
    const navigation = useNavigation()

    if(!from) 
        return <View><Text> Erro ao indentificar a origem </Text></View>

    useEffect(() => {
        const getFile = async () => {
            if(from === 'camera')
                setFile(pickFileFromCamera())
            
            if(from === 'galery'){
               const file:null|DocumentPickerResponse = await pickFileFromGalery()

               if(!file) return navigation.goBack()
                
                setFile(file)
            }
        }
        if(!file)
            getFile()
    })

    if(!file)
        return <Loading/>

    return (
        <ShowFile file={file}/>
    )

}

export default UploadFile