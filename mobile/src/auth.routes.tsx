import React, { Component } from 'react';
import {createStackNavigator} from '@react-navigation/stack'

import Login from './pages/Auth'

const Stack = createStackNavigator()


export const AuthRoutes = () => (
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
            name="Login"
            component={Login}
        />  
                
        <Stack.Screen
            name="Register"
            component={Login}
        />
        
        <Stack.Screen
            name="Recover"
            component={Login}
        />
    </Stack.Navigator>
)