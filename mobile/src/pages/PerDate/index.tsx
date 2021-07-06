import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { FlatList, ListRenderItem, SafeAreaView, Text } from 'react-native'
import Loading from '../../components/loading'
import AuthContext from '../../context/auth'
import { IMonth } from '../../routes/perdate.routes'
import api, {authorizaton} from '../../services/api'
import File from './file'

interface Props {
    month: IMonth
}

export interface IFile{
    _id: string,
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

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          setFocus(true)
          console.log(`Focado: ${month.name}`)
        });
        return unsubscribe;
      }, [navigation]);

    useEffect(() => {
        if(!focus) return

        const requestFiles = async () => {
            await api.get(`/list?month=${month?.number}`, authorizaton(token)).then(response => {
                setFiles(response.data)
            }).catch(error => {
                console.log(error.response.data.error)
            })
            setLoading(false)
        }
        requestFiles()

    },[focus])


    if(!focus)
        return <SafeAreaView/>

    if(loading)
        return <Loading/>
    

    return(
        <SafeAreaView>
            <FlatList
                data={files}
                numColumns={1}
                keyExtractor={item => item._id}
                renderItem={({ item }: { item: IFile }) => <File file={item}/> }
            />
        </SafeAreaView>
    )
}



export default PerDate