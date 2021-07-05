import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PerDate from '../pages/PerDate';

const Tab = createMaterialTopTabNavigator();


const PerDateRoutes:React.FC = () => {

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={PerDate} />
            <Tab.Screen name="Settings" component={PerDate} />
        </Tab.Navigator>
    )
}

export default PerDateRoutes