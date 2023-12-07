import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from "../screens/ContactsScreen";
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from '../theme/AppTheme';
import { Text } from "react-native";

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    //hook para el safe area de ios para que no estorbe el noch. la medida top se usara como paddingtop del toptabnavigator
    const { top } = useSafeAreaInsets();

  return (
    <Tab.Navigator
        style={{
            paddingTop: top
        }}
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
        screenOptions={ ({ route }) => ({
            tabBarPressColor: colors.primary,
            tabBarShowIcon: true,
            tabBarIndicatorStyle: { //Línea inferior en el boton seleccionado
                backgroundColor: colors.primary
            },
            tabBarStyle: {
                elevation: 0,
                shadowColor: 'transparent'
            },
            tabBarIcon: (props) => {
                let iconName: string = '';
                switch(route.name) {
                    case 'Chat' :
                        iconName = 'people-outline'
                    break;

                    case 'Contacts' :
                        iconName = 'list-outline'
                    break;

                    case 'Albums' :
                        iconName = 'book-outline'
                    break;
                }
                return <Icon name={iconName} size={25} color={props.color} />
            }
        })}
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
}