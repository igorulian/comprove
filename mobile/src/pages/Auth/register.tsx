import React, { Component } from 'react';
import { useState } from 'react';
import { SafeAreaView,Text, TextInput, TouchableOpacity, View} from 'react-native';
import GeneralStyles from '../../generalStyles';
import styles from './styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function Register(){
    const [email,setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    return (
        <SafeAreaView style={GeneralStyles.container}>

            <View style={styles.logoContainer}>
                <MaterialCommunityIcons name="folder" color={'#f78139'} size={60} />
                <Text style={styles.logoText}> Registre-se </Text>
            </View>

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

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    onChangeText={(txt:string) => setPassword(txt)}
                    placeholder='Confirme sua senha'
                />
            </View>
            
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontext}> REGISTER </Text>
            </TouchableOpacity>

            <View style={styles.loginwithContainer}>
                <View style={styles.loginwithContent}>
                    <FontAwesome name="facebook-square" color={'#f78139'} size={30} />
                    <Text style={styles.loginwithText}> Login with google </Text>

                </View>
                <View style={styles.loginwithContent}>
                    <FontAwesome name="google" color={'#f78139'} size={30} />
                    <Text style={styles.loginwithText}> Login with facebook </Text>
                </View>
            </View>

        </SafeAreaView>
    )
}