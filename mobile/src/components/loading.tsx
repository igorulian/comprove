import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator} from "react-native"


const Loading:React.FC = () =>{

    return (
        <View style={styles.container}>
             <ActivityIndicator size="large" color="#0b465e"/>
        </View>
    )
}


export default Loading


const styles = StyleSheet.create({
    container:{
        flex: 1,
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    }
})