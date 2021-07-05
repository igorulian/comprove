import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { FlatList, ListRenderItem, SafeAreaView, Text } from 'react-native'
import { IMonth } from '../../routes/perdate.routes'
import File from './file'

interface Props {
    month: IMonth
}

export interface IFile{
    id: string,
    originalname: string,
    mimetype: string,
    location: string,
    category: string
}

const PerDate:React.FC<Props> = ({month}: Props) =>{
    // fazer requisição individual de cada mês
    const navigation = useNavigation()
    const [focus,setFocus] = useState(false)

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          setFocus(true)
        });
        return unsubscribe;
      }, [navigation]);

    const [files,setFiles] = useState<IFile[]>([
        {
            id:'0',
            originalname: 'Teste0',
            mimetype: 'MimeTeste0',
            category: 'Cat0',
            location: 'LocTeste0'
        },
        {
            id:'1',
            originalname: 'Teste1',
            mimetype: 'MimeTeste1',
            category: 'Cat1',
            location: 'LocTeste1'
        },
        {
            id:'2',
            originalname: 'Teste20',
            mimetype: 'MimeTeste20',
            category: 'Cat20',
            location: 'LocTeste20'
        },
    ])

    if(!focus)
        return <SafeAreaView/>
    

    return(
        <SafeAreaView>
            <FlatList
                data={files}
                numColumns={1}
                keyExtractor={item => item.id}
                renderItem={({ item }: { item: IFile }) => <File file={item}/> }
            />
        </SafeAreaView>
    )
}



export default PerDate