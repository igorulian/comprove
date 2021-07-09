import React, { Component } from 'react';
import { useContext } from 'react';
import {Dimensions, SafeAreaView, Text, TouchableOpacity, View} from 'react-native'
import AuthContext from '../../context/auth';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles'


const screenWidth = Dimensions.get('window').width
const Line:React.FC = () => (
    <View style={{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: screenWidth - 150
    }}/>
)

const ConfigButton:React.FC = () => (
    <TouchableOpacity style={{
        position: 'absolute',
        top: 0,
        right: 0,
        margin: 20
    }}>
        <MaterialCommunityIcons name='cog' size={30} color='#333'/>
    </TouchableOpacity>
)

export default function Home(){

    const {signOut} = useContext(AuthContext)
    
    return (
        <SafeAreaView style={styles.container}>
            
            <ConfigButton/>

            <TouchableOpacity style={styles.cameraButton}>
                <MaterialCommunityIcons name='camera' size={100} color='#0b465e'/>
                <Text style={styles.buttonText}> Tirar uma foto </Text>
                <Text style={styles.buttonText}>  do comprovante </Text>
            </TouchableOpacity>

            <Line/>
            
            <TouchableOpacity style={styles.fileButton}>
                <MaterialCommunityIcons name='file' size={100} color='#0b465e'/>
                <Text style={styles.buttonText}> Escolher arquivo </Text>
                <Text style={styles.buttonText}> da galeria </Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}