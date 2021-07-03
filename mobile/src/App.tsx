import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { TabRoutes } from './routes';

const App:React.FC = () => {

  return (
    <NavigationContainer>
      <TabRoutes/>
    </NavigationContainer>
  );
};


 export default App;
