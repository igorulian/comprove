import React, { Component, useContext } from 'react';
import { useState } from 'react';
import { SafeAreaView,Text, TextInput, TouchableOpacity, View, ActivityIndicator, Alert} from 'react-native';
import GeneralStyles from '../../generalStyles';
import styles from './styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BackButton from '../../components/backButton';
import generalStyles from '../../generalStyles';
import api from '../../services/api';
import AuthContext from '../../context/auth';
import LoginSvg from '../../assets/login.svg'

export default function Login(){
    const [email,setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const {signIn} = useContext(AuthContext)

    function checkFields():boolean{

        if(!email || !password){
            Alert.alert('Ops!', 'Preencha todos os campos')
            return false
        }

        if(!(email.includes('@'))){
            Alert.alert('Ops!','Digite um email válido')
            return false
        }

        return true
    }
    
    async function handleLogin(){
        if(!checkFields()) return
        setLoading(true)
        const req = {
            email,
            password
        }

        await api.post('/login', req)
        .then(async res => {
            const {token,user} = res.data
            signIn(token,user)
            
        }).catch(error => {
            return Alert.alert('Ops!', error.response.data.error)
        })
        
        setLoading(false)
    }
    

    return (
        <SafeAreaView style={styles.containerLogin}>
            <BackButton/>

            <View style={styles.logoContainerLogin}>
                <LoginSvg width={150} height={150}/>
                <Text style={styles.logoText}> Entrar </Text>
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
                
                <TouchableOpacity style={styles.button} onPress={() => {handleLogin()}}>
                <Text style={styles.buttontext}> {loading ? <ActivityIndicator  size="small" color="#fff"/> : 'ENTRAR'} </Text>
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    )
}