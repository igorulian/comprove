import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Alert, FlatList, ListRenderItem, SafeAreaView, Text } from 'react-native'
import Loading from '../../../components/loading'
import AuthContext, { ICategory } from '../../../context/auth'
import api, {authorizaton} from '../../../services/api'
import File from '../../PerDate/file'
import NoData from '../../../assets/nodata.svg'

export interface IFile{
    _id: string,
    title: string,
    originalname: string,
    mimetype: string,
    location: string,
    category: string,
    createdAt: string
}

type IParams = {
    Props: {
        category: ICategory;
    };
}

const ListPerCategory:React.FC = () =>{
    const route = useRoute<RouteProp <IParams, 'Props'>>();
    const category = route.params.category
    
    const [loading, setLoading] = useState(true)
    const [files,setFiles] = useState<IFile[]>([])
    const {token} = useContext(AuthContext)
    const [refreshing, setRefresh] = useState<boolean>(false)
    const navigation = useNavigation()

    async function refreshFiles(){
        setRefresh(true)
        await requestFiles()
        setRefresh(false)
    }

    useEffect(() => {
        requestFiles()
        navigation.setOptions({
            title: `${category.name}`,
        })
    },[]);

    const requestFiles = async () => {
        await api.get(`/list?category=${category.name}`, authorizaton(token))
        .then(response => {
            setFiles(response.data)
        }).catch(error => {
            Alert.alert('Ops!', error.response.data.error)
        })
        setLoading(false)
    }

    if(loading)
        return <Loading/>

    if(files.length <= 0){
        return (
        <SafeAreaView style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <NoData width={200} height={200}/>
            <Text style={{marginTop: 20, fontWeight: '500'}}> Você ainda não possui nenhum </Text>
            <Text style={{fontWeight: '500'}}> comprovante nessa categoria</Text>
        </SafeAreaView>
        )
    }
    

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



export default ListPerCategory