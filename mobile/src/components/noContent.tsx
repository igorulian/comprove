import React from "react";
import { SafeAreaView, Text } from "react-native";
import NoData from '../assets/nodata.svg'

interface Props {
    text:string
}

const NoContent:React.FC<Props> = ({text}: Props) => {
    return (
        <SafeAreaView style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <NoData width={200} height={200}/>
            <Text style={{marginTop: 20, fontWeight: '600'}}> {`Você ainda não possui nenhum`} </Text>
            <Text style={{fontWeight: '600'}}> {`comprovante ${text}`} </Text>
        </SafeAreaView>
    )
}

export default NoContent