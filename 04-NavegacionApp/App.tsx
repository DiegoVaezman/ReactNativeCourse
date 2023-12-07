import 'react-native-gesture-handler';
import * as React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/StackNatigator';
import { BasicLateralMenu } from './src/navigation/BasicLateralMenu';
import { LateralMenu } from './src/navigation/LateralMenu';
import { Tabs } from './src/navigation/Tabs';
import { AuthProvider } from './src/context/authContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator/> */}
        {/* <BasicLateralMenu /> */}
        <LateralMenu/>
        {/* <Tabs/> */}
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({ children }: any) => {
  // tipado de/los children: const AppState = ({ children }: {children: JSX.Element[]}) => {   si son más de un children, con [], si no, sin []
  
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App;
