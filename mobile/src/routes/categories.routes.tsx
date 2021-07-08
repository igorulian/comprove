import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import Category from '../pages/Categories';
import AddCategory from '../pages/Categories/Add';
import EditCategory from '../pages/Categories/Edit';

const Stack = createStackNavigator()

export const CategoriesRoutes:React.FC = () => {

    return(
        <Stack.Navigator initialRouteName='list'>
            <Stack.Screen
            name='list'
            options={{ 
                title: 'CATEGORIAS',
                headerStyle:{
                    // backgroundColor: '#0b465e'
                },
                headerTintColor: '#0b465e'
             }}
            component={Category}/>
            
            <Stack.Screen
            name='add'            
            options={{ 
                title: 'CRIAR CATEGORIA',
                headerTintColor: '#0b465e'
             }}
            component={AddCategory}/>
            
            <Stack.Screen
            name='edit'            
            options={{ 
                title: 'EDITAR CATEGORIA',
                headerTintColor: '#0b465e'
             }}
            component={EditCategory}/>

        </Stack.Navigator>
    )
}