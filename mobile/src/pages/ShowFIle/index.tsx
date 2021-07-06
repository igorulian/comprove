import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView,Text, View, Image,ScrollView } from 'react-native';
import BackButton from '../../components/backButton';
import { IFile } from '../PerDate';
import {styles} from './styles'
import Pdf from 'react-native-pdf';
import { useState } from 'react';
import Loading from '../../components/loading';

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

    return (
        <SafeAreaView style={styles.container}>
            <BackButton/>
            <View style={styles.fileContainer}>

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
                        console.log(`Percente: ${percent}`)
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

                <Text> Categoria: {file.category}</Text>
                <Text> Data: {file.createdAt}</Text>


            </View>
            <Text> AA</Text>
        </SafeAreaView>
    )
}

export default ShowFile