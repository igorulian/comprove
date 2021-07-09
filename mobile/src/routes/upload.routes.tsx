import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home'
import UploadFile from '../pages/Home/UploadFile'

const Stack = createStackNavigator();


const UploadRoutes:React.FC = () => {

    return (
        <Stack.Navigator initialRouteName={'home'}>
                <Stack.Screen
                    name={'home'}
                    component={Home}
                    options={{ 
                        headerShown: false
                     }}
                />
                <Stack.Screen
                    name={'upload'}
                    options={{ 
                        title: 'Enviar comprovante',
                        headerTintColor: '#0b465e'
                     }}
                    component={UploadFile}
                />
        </Stack.Navigator>
    )
}

export default UploadRoutes