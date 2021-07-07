import React, { Component } from 'react';
import { useContext } from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native'
import AuthContext from '../../context/auth';

export default function Home(){

    const {signOut} = useContext(AuthContext)
    
    return (
        <SafeAreaView style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text> HOMI </Text>
            <TouchableOpacity onPress={() => {signOut()}}>
                <Text> LOGOUT </Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}