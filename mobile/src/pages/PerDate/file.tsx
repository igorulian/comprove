import React, { useContext } from 'react';
import { TouchableOpacity, View,Text, FlatList } from 'react-native';
import { fileStyle } from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { IFile } from '.';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../../context/auth';

interface CatProps {
    name: string,
    color: string
}

export const Category:React.FC<CatProps> = ({name,color}: CatProps) => {
    return (
        <View style={{...fileStyle.categoryContainer, backgroundColor: color}}>
            <Text style={fileStyle.categoryText}> {name} </Text>
        </View>

    )
}

interface Props {
    file: IFile
}


const File:React.FC<Props> = ({file}: Props) => {
    const navigation = useNavigation()
    const {user} = useContext(AuthContext)
    const categories = user?.categories

    function showFile(){
        navigation.navigate('show', {file: file})
    }

    function fixNumber(n:number){
        return (n < 10) ? '0' + n.toString() : n.toString();
    }

    const fdate = new Date(file.createdAt)
    const fday:string = fixNumber(fdate.getDate())
    const fmonth:string = fixNumber(fdate.getMonth() + 1)
    const fyear:string = fixNumber(fdate.getFullYear())

    let categorycolor = '#ccc'
    categories?.map(category => {
        if(category.name === file.category)
            categorycolor = category.color
    })

    return (
        <TouchableOpacity style={fileStyle.container} onPress={() => {showFile()}}>
            <View style={fileStyle.content}>

                <View style={fileStyle.contentLeft}>
                    <MaterialCommunityIcons name="file-document" color={'#333'} size={40} />
                    <View style={fileStyle.info}>
                        <Text> {file.title} </Text>
                        <Text style={fileStyle.datetxt}> {`${fday}/${fmonth}/${fyear}`} </Text>
                    </View> 
                </View>

                <View style={fileStyle.contentRight}>
                    <Category name={file.category} color={categorycolor}/>
                </View>

                <MaterialCommunityIcons name="chevron-right" color={'#333'} size={20} />

            </View>
        </TouchableOpacity>
    )
}

export default File