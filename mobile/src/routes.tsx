import React, { Component } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Home from './pages/Home'
import PerDate from './pages/PerDate';
import PerCategory from './pages/PerCategory';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator()

const color:string = '#f78139'

export const TabRoutes = () => (
    <Tab.Navigator initialRouteName="Home" tabBarOptions={{activeTintColor: '#f78139'}}>
        <Tab.Screen
            name="Data"
            component={PerDate}        
            options={{
                tabBarLabel: 'Data',
                tabBarIcon: ({color}) => <MaterialCommunityIcons name="calendar-text" color={color} size={30} />
            }}  
        />  
                
        <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarLabel: 'Adicionar',
                tabBarIcon: ({color}) => <MaterialCommunityIcons name="plus-circle" color={color} size={30} />
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