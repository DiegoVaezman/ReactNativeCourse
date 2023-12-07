import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/AppTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../navigation/StackNatigator';
import { AuthContext } from '../context/authContext';


// interface RouteParams {
//     id: number,
//     name: string
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'>{}

export const PersonScreen = ( { route, navigation } :Props) => {
    // console.log(JSON.stringify(props, null, 3))

    // const params = route.params as RouteParams
    const params = route.params

    const { setUserName } = useContext(AuthContext)


    useEffect( () => {
        navigation.setOptions({
            title: params.name
        });
    }, [])
    
    useEffect(() => {
        setUserName(params.name);
    }, [])


    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                {
                    JSON.stringify(params, null, 3)
                }
            </Text>

            
        </View>
    )
}
