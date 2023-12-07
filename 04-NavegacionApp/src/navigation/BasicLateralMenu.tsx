import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNatigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const BasicLateralMenu = () => {

  const { width, height } = useWindowDimensions();

  return (
    <Drawer.Navigator
    screenOptions={{
      drawerType: width > height ? 'permanent' : 'front' 
    }}
    >
      <Drawer.Screen name="StackNavigator" options={{ title:"Home" }} component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" options={{ title: "settings" }}  component={SettingsScreen} />
    </Drawer.Navigator>
  );
}