import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import{ AuthProvider } from './context/auth';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const App:React.FC = () => {

  // useEffect(() => {
  //   const resetStorage = async () => {
  //     console.log('resetanuuuuuuuuuuuuuuuuuuuuu')
  //     await AsyncStorage.removeItem('@comprove:token')
  //     await AsyncStorage.removeItem('@comprove:email')
  //     console.log(await AsyncStorage.getItem('@comprove:token'))
  //     console.log(await AsyncStorage.getItem('@comprove:email'))
  //   }
  //   resetStorage()
  // })

  return (
      <NavigationContainer>
        <AuthProvider/>
      </NavigationContainer>
  );
};


 export default App;
