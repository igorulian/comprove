import React, { useContext } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import styles from './styles'
import AuthContext from '../../../context/auth';

const Config:React.FC = () => {
    const {signOut} = useContext(AuthContext)

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => {signOut()}} style={styles.btnSair}>
                <Text style={styles.btnText}> SAIR </Text> 
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Config