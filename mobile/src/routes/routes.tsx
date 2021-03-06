import React, { Component } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import UploadRoutes from './upload.routes'
import PerDateRoutes from './perdate.routes'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity } from 'react-native';
import { CategoriesRoutes } from './categories.routes';

const Tab = createBottomTabNavigator()

type ButtonTypes = {
    children: React.ReactNode,
    onPress: any
}

const UploadButton: React.FC|any = ({children, onPress}:ButtonTypes) => {

    return(
        <TouchableOpacity style={{
            top: -20,
            justifyContent: 'center',
            alignItems: 'center',
            width: 60,
            height: 60,
            borderRadius: 35,
            backgroundColor: '#0b465e'
        }}
        onPress={onPress}>
            {children}

        </TouchableOpacity>
    )
}

export const TabRoutes = () => (
    <Tab.Navigator initialRouteName="Home" tabBarOptions={{activeTintColor: '#0b465e'}}>
        <Tab.Screen
            name="Data"
            component={PerDateRoutes}        
            options={{
                tabBarLabel: 'Comprovantes',
                tabBarIcon: ({color}) => <MaterialCommunityIcons name="calendar-text" color={color} size={30} />
            }} 
        />  
                
        <Tab.Screen
            name="Home"
            component={UploadRoutes}
            options={{
                tabBarLabel: () => null,
                tabBarIcon: () => (<MaterialCommunityIcons name="arrow-up" color={'#fff'} size={40} />),
                tabBarButton: (props) => (<UploadButton {...props}/>) 
            }}  
        />
        
        <Tab.Screen
            name="Categoria"
            component={CategoriesRoutes}
            options={{
                tabBarLabel: 'Categorias',
                tabBarIcon: ({color}) => <MaterialCommunityIcons name="format-list-bulleted" color={color} size={30} />
            }}  
        />
    </Tab.Navigator>
)