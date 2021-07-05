import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import{ AuthProvider } from './context/auth';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const App:React.FC = () => {

  // useEffect(() => {
  //   const resetStorage = async () => {
  //     await AsyncStorage.setItem('@comprove:token', '')
  //   }
  //   // resetStorage()
  // })

  return (
      <NavigationContainer>
        <AuthProvider/>
      </NavigationContainer>
  );
};


 export default App;
