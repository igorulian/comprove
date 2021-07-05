import React from 'react'
import { useState } from 'react'
import { FlatList, SafeAreaView, Text } from 'react-native'
import { IMonth } from '../../routes/perdate.routes'
import File from './file'

interface Props {
    month: IMonth
}

interface IFile{
    id: number
}

const PerDate:React.FC<Props> = ({month}: Props) =>{
    const [files,setFiles] = useState([
        {
            id:'0'
        },
        {
            id:'1'
        },
        {
            id:'2'
        },
        {
            id:'3'
        }
    ])

    return(
        <SafeAreaView>
            <FlatList
                data={files}
                numColumns={1}
                keyExtractor={item => item.id}
                renderItem={({ item }) => { return ( <File/> )}}
            />
        </SafeAreaView>
    )
}



export default PerDate