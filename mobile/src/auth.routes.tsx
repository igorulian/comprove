import React, { Component } from 'react';
import {createStackNavigator} from '@react-navigation/stack'

import Login from './pages/Auth/login'
import Register from './pages/Auth/register'

const Stack = createStackNavigator()


export const AuthRoutes = () => (
    <Stack.Navigator initialRouteName="Register" screenOptions={{headerShown: false}}>
        <Stack.Screen
            name="Login"
            component={Login}
        />  
                
        <Stack.Screen
            name="Register"
            component={Register}
        />
        
        <Stack.Screen
            name="Recover"
            component={Login}
        />
    </Stack.Navigator>
)