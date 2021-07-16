import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home'
import UploadFile from '../pages/Home/UploadFile'
import Config from '../pages/Home/Config'

const Stack = createStackNavigator();


const UploadRoutes:React.FC = () => {

    const screenOptions = (title:string) => ({
        title: title,
        headerTintColor: '#fff',
        headerStyle:{
            backgroundColor: '#0b465e'
        }
    })

    return (
        <Stack.Navigator initialRouteName={'home'}>
                <Stack.Screen
                    name={'home'}
                    component={Home}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={'upload'}
                    options={screenOptions('Enviar comprovante')}
                    component={UploadFile}
                />
                <Stack.Screen
                    name={'config'}
                    options={screenOptions('Configurações')}
                    component={Config}
                />
        </Stack.Navigator>
    )
}

export default UploadRoutes