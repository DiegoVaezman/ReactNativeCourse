import React from 'react'
import { useContext } from 'react';
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/AppTheme';
import { AuthContext } from '../context/authContext';

export const ContactsScreen = () => {

    const { signIn, authState } = useContext( AuthContext )

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Contacts Screen</Text>

            {authState.isLoggedIn === false &&
                <Button
                    title="Sign in"
                    onPress={ signIn } 
                />
            } 
        </View>
    )
}
