import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PerDate from '../pages/PerDate';
import PerDateRoutesList from './perdate.list.routes';
import ShowFile from '../pages/ShowFIle';

const Stack = createStackNavigator();


const PerDateRoutes:React.FC = () => {

    return (
        <Stack.Navigator initialRouteName={'file'} screenOptions={{headerShown: false}}>
                <Stack.Screen
                    name={'file'}
                    component={PerDateRoutesList}
                />
                <Stack.Screen
                    name={'show'}
                    component={ShowFile}
                />
        </Stack.Navigator>
    )
}

export default PerDateRoutes