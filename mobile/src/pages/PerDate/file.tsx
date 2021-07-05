import React from 'react';
import { TouchableOpacity, View,Text, FlatList } from 'react-native';
import { fileStyle } from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../Auth/styles';
import { IFile } from '.';

interface CatProps {
    name: string
}

const Category:React.FC<CatProps> = ({name}: CatProps) => {
    return (
        <View style={fileStyle.categoryContainer}>
            <Text style={fileStyle.categoryText}> {name} </Text>
        </View>

    )
}

interface Props {
    file: IFile
}


const File:React.FC<Props> = ({file}: Props) => {
    console.log(file) 

    return (
        <TouchableOpacity style={fileStyle.container}>
            <View style={fileStyle.content}>

                <View style={fileStyle.contentLeft}>
                    <MaterialCommunityIcons name="file-document" color={'#f78139'} size={40} />
                    <View style={fileStyle.info}>
                        <Text> {file.originalname} </Text>
                        <Text style={fileStyle.datetxt}> 07/05/2020 </Text>
                    </View> 
                </View>

                <View style={fileStyle.contentRight}>
                    <Category name={file.category}/>
                </View>

            </View>
        </TouchableOpacity>
    )
}

export default File