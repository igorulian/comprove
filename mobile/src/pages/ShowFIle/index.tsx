import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView,Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import BackButton from '../../components/backButton';
import { IFile } from '../PerDate';
import {styles} from './styles'
import Pdf from 'react-native-pdf';
import { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Category } from '../PerDate/file';
import DatePicker from 'react-native-date-picker'

type IParams = {
    Props: {
        file: IFile;
    };
}

const ShowFile:React.FC = () => {
    const route = useRoute<RouteProp <IParams, 'Props'>>();
    const file = route.params.file
    const fileSource = {uri:file.location};
    const [loading,setLoading] = useState(true)
    const fileDate = new Date(file.createdAt)

    const [category,setCategory] = useState(file.category)
    const [date, setDate] = useState(fileDate)

    return (
        <ScrollView>
            <BackButton/>
            <View style={styles.fileContainer}>

                <TouchableOpacity style={styles.shareButton}>
                    <MaterialCommunityIcons name="share-circle" color={'#f78139'} size={50} />
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
                    onLoadComplete={(numberOfPages,filePath)=>{
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
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
                    <Category name='Categoria' color='#f78139'/>
                    <Category name='Categoria' color='#ccc'/>
                    <Category name='Categoria' color='#ccc'/>
                    <Category name='Categoria' color='#ccc'/>
                </View>
                <View style={styles.categoryContainer}>
                    <Category name='Categoria' color='#ccc'/>
                    <Category name='Categoria' color='#ccc'/>
                    <Category name='Categoria' color='#ccc'/>
                </View>

                <Text style={styles.fileInfoText}> Data:</Text>

                <DatePicker
                    date={date}
                    onDateChange={setDate}
                    style={styles.datePicker}
                    androidVariant={'nativeAndroid'}
                    locale={'pt_BR'}
                    mode={'date'}
                />
            </View>

            <TouchableOpacity style={styles.btnSave}>
                <Text style={styles.btnSaveText}> SALVAR </Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default ShowFile