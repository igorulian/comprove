import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Alert, FlatList, ListRenderItem, SafeAreaView, Text, View } from 'react-native'
import Loading from '../../components/loading'
import NoContent from '../../components/noContent'
import AuthContext from '../../context/auth'
import { IMonth } from '../../routes/perdate.list.routes'
import api, {authorizaton} from '../../services/api'
import File from './file'

interface Props {
    month: IMonth
}

export interface IFile{
    _id: string,
    title: string,
    originalname: string,
    mimetype: string,
    location: string,
    category: string,
    createdAt: string
}

const PerDate:React.FC<Props> = ({month}: Props) =>{
    const navigation = useNavigation()
    const [focus,setFocus] = useState(false)
    const [loading, setLoading] = useState(true)
    const [files,setFiles] = useState<IFile[]>([])
    const {token} = useContext(AuthContext)
    const [refreshing, setRefresh] = useState<boolean>(false)

    async function refreshFiles(){
        setRefresh(true)
        await requestFiles()
        setRefresh(false)
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          setFocus(true)
          requestFiles()
        });
        return unsubscribe;
      }, [navigation]);

    const requestFiles = async () => {
        await api.get(`/list?month=${month?.number}`, authorizaton(token)).then(response => {
            setFiles(response.data)
        }).catch(error => {
            Alert.alert('Ops!', error.response.data.error)
        })
        setLoading(false)
    }


    if(!focus)
        return null

    if(loading)
        return <Loading/>

    if(files.length <= 0)
        return <NoContent text='nesse mês'/>
    
    

    return(
        <SafeAreaView>
            <FlatList
                data={files}
                numColumns={1}
                keyExtractor={item => item._id}
                renderItem={({ item }: { item: IFile }) => <File file={item}/> }
                onRefresh={() => {refreshFiles()}}
                refreshing={refreshing}
            />
        </SafeAreaView>
    )
}



export default PerDate