import React, { Component } from 'react';
import { useState } from 'react';
import { SafeAreaView,Text, TextInput, TouchableOpacity, View} from 'react-native';
import GeneralStyles from '../../generalStyles';
import styles from './styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BackButton from '../../components/backButton';
import generalStyles from '../../generalStyles';

export default function Login(){
    const [email,setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    

    return (
        <SafeAreaView style={generalStyles.container}>
            <BackButton/>

            <View style={styles.logoContainer}>
                <MaterialCommunityIcons name="folder" color={'#f78139'} size={60} />
                <Text style={styles.logoText}> Entrar </Text>
            </View>

            <View style={styles.content}>
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
                    <Text style={styles.buttontext}> ENTRE </Text>
                </TouchableOpacity>

            </View>

            <View style={styles.fillSpace}/>

        </SafeAreaView>
    )
}