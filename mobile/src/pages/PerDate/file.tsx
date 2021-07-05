import React from 'react';
import { TouchableOpacity, View,Text, FlatList } from 'react-native';
import { fileStyle } from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../Auth/styles';

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


const File:React.FC = () => {

    const categories = [
        {
            name: 'teste1'
        },
        {
            name: 'teste2'
        },
        {
            name: 'teste3'
        },
        {
            name: 'teste4'
        },
        {
            name: 'teste5'
        },
    ]

    return (
        <TouchableOpacity style={fileStyle.container}>
            <View style={fileStyle.content}>

                <View style={fileStyle.contentLeft}>
                    <MaterialCommunityIcons name="file-document" color={'#f78139'} size={40} />
                    <View style={fileStyle.info}>
                        <Text> Titulo </Text>
                        <Text style={fileStyle.datetxt}> 07/05/2020 </Text>
                    </View> 
                </View>

                <FlatList
                    style={fileStyle.contentRight}
                    keyExtractor={item => item.name}
                    data={categories}
                    numColumns={3}
                    renderItem={({ item }) => { return ( <Category name={item.name}/> )}}
                />

            </View>
        </TouchableOpacity>
    )
}

export default File