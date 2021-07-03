import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { TabRoutes } from './routes';
import { AuthRoutes } from './auth.routes';

const App:React.FC = () => {

  const isAuthenticated:boolean = true

  return (
    <NavigationContainer>

      {isAuthenticated ?
        <TabRoutes/>
      :
        <AuthRoutes/>
      }

    </NavigationContainer>
  );
};


 export default App;
