import React from 'react';
import { Platform, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './StackNatigator';
import { colors } from '../theme/AppTheme';
import { TopTabNavigator } from './TopTabNavigator';


export const Tabs = () => {
    return Platform.OS === 'ios'
        ? <TabsIOS/>
        : <TabsAndroid/>
}


const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
        sceneAnimationEnabled={ true }
        barStyle={{
            backgroundColor: colors.primary
        }}
        screenOptions={ ({ route }) => ({
            tabBarIcon: (props) => {
                let iconName: string = '';
                switch(route.name) {
                    case 'Tab1Screen' :
                        iconName = 'color-filter-sharp'
                    break;

                    case 'Tab2Screen' :
                        iconName = 'albums-sharp'
                    break;

                    case 'StackNavigator' :
                        iconName = 'bookmarks-sharp'
                    break;
                }
                return <Icon name={iconName} size={25} color={props.color} />
            }
        })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="Tab2Screen" options={{ title: 'Tab2'}} component={TopTabNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack nav'}} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}




const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
        screenOptions={ ({ route }) => ({
            tabBarActiveTintColor: colors.primary,
            tabBarStyle: {
                borderTopColor: 'red',
                borderTopWidth: 0,
                elevation: 0
            },
            tabBarLabelStyle: {
                fontSize: 15
            },
            tabBarIcon: (props) => {
                let iconName: string = '';
                switch(route.name) {
                    case 'Tab1Screen' :
                        iconName = 'color-filter-sharp'
                    break;

                    case 'Tab2Screen' :
                        iconName = 'albums-sharp'
                    break;

                    case 'StackNavigator' :
                        iconName = 'body-sharp'
                    break;
                }
                return <Icon name={iconName} size={25} color={props.color} />
            }
        })}
    >
      <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1'}} component={Tab1Screen} />
      <BottomTabIOS.Screen name="Tab2Screen" options={{ title: 'Tab2'}} component={TopTabNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack nav'}} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
}

