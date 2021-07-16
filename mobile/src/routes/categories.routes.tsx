import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import Category from '../pages/Categories';
import AddCategory from '../pages/Categories/Add';
import EditCategory from '../pages/Categories/Edit';
import ListPerCategory from '../pages/Categories/List';

const Stack = createStackNavigator()

export const CategoriesRoutes:React.FC = () => {

    const screenOptions = (title:string) => ({
        title: title,
        headerTintColor: '#fff',
        headerStyle:{
            backgroundColor: '#0b465e'
        }
    })

    return(
        <Stack.Navigator initialRouteName='list'>
            <Stack.Screen
            name='list'
            options={screenOptions('CATEGORIAS')}
            component={Category}/>
            
            <Stack.Screen
            name='add'            
            options={screenOptions('CRIAR CATEGORIA')}
            component={AddCategory}/>
            
            <Stack.Screen
            name='edit'            
            options={screenOptions('EDITAR CATEGORIA')}
            component={EditCategory}/>
            
            <Stack.Screen
            name='listFiles'            
            options={screenOptions('')}
            component={ListPerCategory}/>

        </Stack.Navigator>
    )
}