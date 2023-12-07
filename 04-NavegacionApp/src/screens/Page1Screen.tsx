import React from 'react'
import { DrawerScreenProps } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { useEffect } from 'react';
import { Button, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import { styles } from '../theme/AppTheme';
import { NavigationHelpersContext } from '@react-navigation/native';

// interface Props extends StackScreenProps<any, any> { };
interface Props extends DrawerScreenProps<any, any> { };

export const Page1Screen = ({ navigation }: Props) => {

    const { width, height } = useWindowDimensions();

    //para crear icono tipo amburguesa que despliega el menu lateral DrawerNavigation (de todas maneras ya viene con un boton amburguesa por defecto)
    // mediante el width mostramos u ocultamos según pantalla vert. u horiz. useEffect se ejecuta cada vez que width cambia!!
    useEffect(() => {
      navigation.setOptions({
          headerLeft: () => (
            (width > height) ?
            <Button
                title="iconico"
                onPress={ () => navigation.toggleDrawer()}
            />
            : null
          )
      })
    }, [width])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Page 1 Screen</Text>

            <Button
                title="Ir a página 2"
                onPress={() => navigation.navigate('Page2Screen')}
            />

            
            <Text style={{
                ...styles.title,
                marginVertical: 20
            }}> 
                Navegar por argumentos
            </Text>

            <View style={{flexDirection:'row'}}>
                <TouchableOpacity
                    style= {{
                        ...styles.bigButton, 
                        backgroundColor: '#5856D6'
                    }}
                    onPress={ () => navigation.navigate('PersonScreen', {
                        id: 1,
                        name: 'Pedro'
                    }) }
                >
                    <View style={{
                        alignItems: 'center',
                        flex: 1,
                        justifyContent:'space-around'
                    }}>
                        <Icon name="person-outline" size={50} color="white" />
                        <Text style={styles.bigButtonText}>Pedro</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style= {{
                        ...styles.bigButton, 
                        backgroundColor: '#FF9427'
                    }}  
                    onPress={ () => navigation.navigate('PersonScreen', {
                        id: 2,
                        name: 'Maria'
                    }) }
                >
                    <View style={{
                        alignItems: 'center',
                        flex: 1,
                        justifyContent:'space-around'
                    }}>
                        <Icon name="person-outline" size={50} color="white" />
                        <Text style={styles.bigButtonText}>Maria</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
