import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PerDate from '../pages/PerDate';

const Tab = createMaterialTopTabNavigator();

export interface IMonth {
    name:string,
    initials: string,
    number:number
}

const currentMonthNumber = new Date().getMonth() + 1

const PerDateRoutes:React.FC = () => {

    const months:IMonth[] = [
        {
            name: 'Janeiro',
            initials: 'JAN',
            number: 1
        },
        {
            name: 'Fevereiro',
            initials: 'FEV',
            number: 2
        },
        {
            name: 'Março',
            initials: 'MAR',
            number: 3
        },
        {
            name: 'Abril',
            initials: 'ABR',
            number: 4
        },
        {
            name: 'Maio',
            initials: 'MAI',
            number: 5
        },
        {
            name: 'Junho',
            initials: 'JUN',
            number: 6
        },
        {
            name: 'Julho',
            initials: 'JUL',
            number: 7
        },
        {
            name: 'Agosto',
            initials: 'AGO',
            number: 8
        },
        {
            name: 'Setembro',
            initials: 'SET',
            number: 9
        },
        {
            name: 'Outubro',
            initials: 'OUT',
            number: 10
        },
        {
            name: 'Novembro',
            initials: 'NOV',
            number: 11
        },
        {
            name: 'Dezembro',
            initials: 'DEZ',
            number: 12
        }
    ]

    const currentMonth:IMonth|undefined = months.find(mes => mes.number === currentMonthNumber)


    return (
        <Tab.Navigator initialRouteName={currentMonth?.initials} tabBarOptions={{scrollEnabled: true ,tabStyle:{width: 100}}}>
            {months.map(month => (
                <Tab.Screen
                    key={month.number} 
                    name={month.initials}
                    children={()=><PerDate month={month}/>}
                />
            ))}
        </Tab.Navigator>
    )
}

export default PerDateRoutes