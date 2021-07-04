import React, { Component } from 'react';
import { useState } from 'react';
import { SafeAreaView,Text, TextInput, TouchableOpacity, View} from 'react-native';
import GeneralStyles from '../../generalStyles';
import styles from './styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';

export default function Register(){
    const [email,setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const navigation = useNavigation();

    function goToLogin() {
        navigation.navigate('Login')
    }

    return (
        <SafeAreaView style={GeneralStyles.container}>

            <View style={styles.logoContainer}>
                <MaterialCommunityIcons name="folder" color={'#f78139'} size={60} />
                <Text style={styles.logoText}> Registre-se </Text>
            </View>

            <View style={styles.content}>
                <View style={styles.form}>
                    <MaterialCommunityIcons name="email-outline" color={'#c4c4c4'} size={20} style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        onChangeText={(txt:string) => setEmail(txt)}
                        placeholder='Digite seu email'
                    />
                </View>

                <View style={styles.form}>
                    <MaterialCommunityIcons name="key-outline" color={'#c4c4c4'} size={20} style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        onChangeText={(txt:string) => setPassword(txt)}
                        placeholder='Digite sua senha'
                    />
                </View>

                <View style={styles.form}>
                    <MaterialCommunityIcons name="key-outline" color={'#c4c4c4'} size={20} style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        onChangeText={(txt:string) => setPassword(txt)}
                        placeholder='Confirme sua senha'
                    />
                </View>
                
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttontext}> REGISTRAR </Text>
                </TouchableOpacity>

            </View>

            <View style={styles.loginwithContainer}>

                <TouchableOpacity style={styles.loginwithContentFacebook}>
                    <AntDesign name="facebook-square" color={'#fff'} size={20} />    
                    <Text style={styles.loginwithTextFacebook}> Entrar com Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginwithContentGoogle}>
                    <AntDesign name="google" color={'#fff'} size={20} />
                    <Text style={styles.loginwithTextGoogle}> Entrar com Google</Text>
                </TouchableOpacity>

            </View>

            <TouchableOpacity style={styles.orLoginButton} onPress={() => goToLogin()}>
                <Text style={styles.orLoginText}> Já possui uma conta? </Text>
                <Text style={styles.orLoginTextEntre}> Entre aqui </Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}