import React, { Component } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Home from './pages/Home'

const Tab = createBottomTabNavigator()


export const TabRoutes = () => (
    <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
            name="Home"
            component={Home}
        />  
                
        <Tab.Screen
            name="Data"
            component={Home}
        />
        
        <Tab.Screen
            name="Categoria"
            component={Home}
        />
    </Tab.Navigator>
)