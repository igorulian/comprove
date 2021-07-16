import React, { Component } from 'react';
import { useState } from 'react';
import { Alert, SafeAreaView,Text, TextInput, TouchableOpacity, View, ActivityIndicator} from 'react-native';
import GeneralStyles from '../../generalStyles';
import styles from './styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import AuthContext from '../../context/auth';
import { useContext } from 'react';
import LoginSvg from '../../assets/login.svg'

export default function Register(){
    const [email,setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [password2, setPassword2] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const {signIn} = useContext(AuthContext)

    const navigation = useNavigation();

    function goToLogin() {
        navigation.navigate('Login')
    }

    function checkFields():boolean{

        if(!email || !password || !password2){
            Alert.alert('Ops!', 'Preencha todos os campos')
            return false
        }

        if(!(email.includes('@'))){
            Alert.alert('Ops!','Digite um email válido')
            return false
        }

        if(password !== password2){
            Alert.alert('Ops!','Senhas não correspondem')
            return false
        }

        return true
    }


    async function handleRegister(){
        if(!checkFields()) return
        setLoading(true)
        const req = {
            email,
            password
        }

        await api.post('/register', req)
        .then(async res => {
            const {token,user} = res.data
            signIn(token,user)

        }).catch(error => {
            return Alert.alert('Ops!', error.response.data.error)
        })
        
        setLoading(false)
    }

    return (
        <SafeAreaView style={GeneralStyles.container}>

            <View style={styles.logoContainer}>
                <LoginSvg width={150} height={180}/>
                <Text style={styles.logoText}> Registre-se </Text>
            </View>

            <View style={styles.content}>
                <View style={styles.form}>
                    <MaterialCommunityIcons name="email-outline" color={'#c4c4c4'} size={20} style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        onChangeText={(txt:string) => setEmail(txt)}
                        placeholder='Digite seu email'
                        keyboardType='email-address'
                    />
                </View>

                <View style={styles.form}>
                    <MaterialCommunityIcons name="key-outline" color={'#c4c4c4'} size={20} style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        onChangeText={(txt:string) => setPassword(txt)}
                        placeholder='Digite sua senha'
                        secureTextEntry={password.length >= 1 ? true : false}
                    />
                </View>

                <View style={styles.form}>
                    <MaterialCommunityIcons name="key-outline" color={'#c4c4c4'} size={20} style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        onChangeText={(txt:string) => setPassword2(txt)}
                        placeholder='Confirme sua senha'
                        secureTextEntry={password2.length >= 1 ? true : false}
                    />
                </View>
                
                <TouchableOpacity style={styles.button} onPress={() => {handleRegister()}}>
                    <Text style={styles.buttontext}> {loading ? <ActivityIndicator  size="small" color="#fff"/> : 'REGISTRAR'} </Text>
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