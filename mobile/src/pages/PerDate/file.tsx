import React from 'react';
import { TouchableOpacity, View,Text, FlatList } from 'react-native';
import { fileStyle } from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../Auth/styles';
import { IFile } from '.';

interface CatProps {
    name: string,
    color: string
}

const Category:React.FC<CatProps> = ({name,color}: CatProps) => {
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

    function fixNumber(n:number){
        return (n < 10) ? '0' + n.toString() : n.toString();
    }

    const fdate = new Date(file.createdAt)
    const fday:string = fixNumber(fdate.getDay())
    const fmonth:string = fixNumber(fdate.getMonth() + 1)
    const fyear:string = fixNumber(fdate.getFullYear())

    return (
        <TouchableOpacity style={fileStyle.container}>
            <View style={fileStyle.content}>

                <View style={fileStyle.contentLeft}>
                    <MaterialCommunityIcons name="file-document" color={'#f78139'} size={40} />
                    <View style={fileStyle.info}>
                        <Text> {file.title} </Text>
                        <Text style={fileStyle.datetxt}> {`${fday}/${fmonth}/${fyear}`} </Text>
                    </View> 
                </View>

                <View style={fileStyle.contentRight}>
                    <Category name={file.category} color='#0b465e'/>
                </View>

                <MaterialCommunityIcons name="chevron-right" color={'#333'} size={20} />

            </View>
        </TouchableOpacity>
    )
}

export default File