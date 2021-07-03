import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { TabRoutes } from './routes';
import { AuthRoutes } from './auth.routes';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Loading from './components/loading'

import {View, Text} from 'react-native'

const App:React.FC = () => {
  const [isLoading, setLoading] = useState(true)
  const [isAuth, setAuth] = useState(false)

  useEffect(() => {
    const token = 'aaa'
    const hasToken = token ? true : false

    setAuth(hasToken)
    setLoading(false)
  })

  if(isLoading)
    return <Loading/>

  return (
    <NavigationContainer>

      {isAuth ? <TabRoutes/> : <AuthRoutes/>}

    </NavigationContainer>
  );
};


 export default App;
