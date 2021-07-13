import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import{ AuthProvider } from './context/auth';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { StatusBar } from 'react-native';

const App:React.FC = () => {

  return (
      <NavigationContainer>
        <StatusBar
          animated={true}
          backgroundColor="#0b465e"
          barStyle='light-content'/>
        <AuthProvider/>
      </NavigationContainer>
  );
};


 export default App;
