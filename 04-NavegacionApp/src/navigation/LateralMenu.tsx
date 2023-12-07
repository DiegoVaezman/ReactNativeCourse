import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
// import { StackNavigator } from './StackNatigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/AppTheme';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const LateralMenu = () => {

  const { width, height } = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width > height ? 'permanent' : 'front' 
      }}
      drawerContent={ (props) => <InternalMenu { ...props } /> }
    >
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const InternalMenu = ( { navigation }: DrawerContentComponentProps ) => {
  return (
    <DrawerContentScrollView>

      {/* Parte del avatar */}
      <View style={styles.avatarContainer}>
        <Image 
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
          }}
          style= { styles.avatar}
        />
      </View>

      {/* Opciones de menú */}
      <View style={styles.menuContainer}>

        <TouchableOpacity 
          style={ styles.menuButton }
          onPress={ () => navigation.navigate('Tabs') }
        >
          <View style={{
            flexDirection: 'row'
          }}>
            <Icon name="airplane-sharp" size={30} color="black" />
            <Text style={ styles.menuText }>Navigation-Tabs</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={ styles.menuButton }
          onPress={ () => navigation.navigate('SettingsScreen') }
        >
          <View style={{
            flexDirection: 'row'
          }}>
            <Icon name="construct-sharp" size={30} color="black" />
            <Text style={ styles.menuText }>Settings</Text>
          </View>
          
        </TouchableOpacity>

      </View>

    </DrawerContentScrollView>
  )
}