import React, { Component } from 'react';
import { useState } from 'react';
import { SafeAreaView,Text, TextInput, TouchableOpacity, View} from 'react-native';
import GeneralStyles from '../../generalStyles';
import styles from './styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Login(){
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <SafeAreaView style={GeneralStyles.container}>

            <MaterialCommunityIcons name="earth" color={'#333'} size={50} />

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    onChangeText={(txt:string) => setEmail(txt)}
                    placeholder='Digite seu email'
                />
            </View>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    onChangeText={(txt:string) => setPassword(txt)}
                    placeholder='Digite sua senha'
                />
            </View>
            
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontext}> LOGIN </Text>
            </TouchableOpacity>

            <View style={styles.loginwithContainer}>
                <View style={styles.loginwithContent}>
                    <Text> Login with google </Text>

                </View>
                <View style={styles.loginwithContent}>
                    <Text> Login with facebook </Text>
                </View>
            </View>

        </SafeAreaView>
    )
}