import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GlobalStackNavigation } from './src/navigation/GlobalStackNavigation';
import { PermissionsProvider } from './src/context/PermissionsContext';

const AppState = ({children}: any) => {
  return (
    <PermissionsProvider>
      {children}
    </PermissionsProvider>
  )
}

const App = () => {
  return (
  <NavigationContainer>
    <AppState>
      <GlobalStackNavigation />
    </AppState>
  </NavigationContainer>
  )
}

export default App;