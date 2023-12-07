import React from 'react'
import { Button, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/AppTheme';

interface Props extends StackScreenProps<any, any> { };

export const Page3Screen = ({ navigation }: Props) => {
    return (
        <View style= { styles.globalMargin }>
            <Text style={ styles.title }> Page 3 Screen</Text>

            <Button
                title="Back"
                onPress={() => navigation.pop()}
            />

            <Button
                title="Go Home"
                onPress={() => navigation.popToTop()}
            />

        </View>
    )
}
