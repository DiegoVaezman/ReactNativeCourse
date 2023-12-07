import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/AppTheme';
import { Page3Screen } from './Page3Screen';


export const Page2Screen = () => {

    const navigator = useNavigation();

    useEffect(() => {
        navigator.setOptions({
            title: 'Hola mundo',
            headerBackTitle: 'Back'
        })
    }, [])

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }> Page 2 Screen</Text>

            <Button
                title="Ir a página 3"
                onPress={ () => navigator.navigate('Page3Screen' as any) }
            />
        </View>
    )
}
