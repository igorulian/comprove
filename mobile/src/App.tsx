import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { TabRoutes } from './routes';
import { AuthRoutes } from './auth.routes';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Loading from './components/loading'

const App:React.FC = () => {
  const [isLoading, setLoading] = useState(true)
  const [isAuth, setAuth] = useState(false)

  useEffect(() => {
    const checkToken = async() =>{
      // const token = await AsyncStorage.getItem('@token')
      const token = undefined
      const hasToken = token ? true : false
  
      setAuth(hasToken)
      setLoading(false)
    }

    checkToken()
  },[])

  if(isLoading)
    return <Loading/>

  return (
    <NavigationContainer>

      {isAuth ? <TabRoutes/> : <AuthRoutes/>}

    </NavigationContainer>
  );
};


 export default App;
