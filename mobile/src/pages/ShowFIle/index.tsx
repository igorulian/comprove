import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView,Text, View, Image } from 'react-native';
import BackButton from '../../components/backButton';
import { IFile } from '../PerDate';
import {styles} from './styles'

type IParams = {
    Props: {
        file: IFile;
    };
}

const ShowFile:React.FC = () => {
    const route = useRoute<RouteProp <IParams, 'Props'>>();
    const file = route.params.file

    return (
        <SafeAreaView style={styles.container}>
            <BackButton/>
            <View style={styles.fileContainer}>
                <Image 
                    style={styles.fileContent} 
                    source={{uri: file.location}}
                />

            </View>
            <Text> AA</Text>
        </SafeAreaView>
    )
}

export default ShowFile