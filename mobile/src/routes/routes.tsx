import React, { Component } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Home from '../pages/Home'
import PerDateRoutes from '../routes/perdate.routes'
import PerCategory from '../pages/PerCategory';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { GestureResponderEvent, TouchableOpacity, View } from 'react-native';

const Tab = createBottomTabNavigator()

type ButtonTypes = {
    children: React.ReactNode,
    onPress: any
}

const UploadButton: React.FC|any = ({children, onPress}:ButtonTypes) => {

    return(
        <TouchableOpacity style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#f78139'
        }}
        onPress={onPress}>
            {children}

        </TouchableOpacity>
    )
}

export const TabRoutes = () => (
    <Tab.Navigator initialRouteName="Home" tabBarOptions={{activeTintColor: '#f78139', showLabel: false}}>
        <Tab.Screen
            name="Data"
            component={PerDateRoutes}        
            options={{
                tabBarLabel: 'Data',
                tabBarIcon: ({color,focused}) => <MaterialCommunityIcons name="calendar-text" color={color} size={30} />
            }}  
        />  
                
        <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarLabel: 'Teste',
                tabBarIcon: () => (<MaterialCommunityIcons name="arrow-up" color={'#fff'} size={40} />),
                tabBarButton: (props) => (<UploadButton {...props}/>) 
            }}  
        />
        
        <Tab.Screen
            name="Categoria"
            component={PerCategory}
            options={{
                tabBarLabel: 'Categorias',
                tabBarIcon: ({color}) => <MaterialCommunityIcons name="format-list-bulleted" color={color} size={30} />
            }}  
        />
    </Tab.Navigator>
)