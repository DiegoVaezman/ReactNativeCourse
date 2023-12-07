import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/AppTheme';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

export const AlbumsScreen = () => {

    const { authState, logOut } = useContext(AuthContext)

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Albums Screen</Text>

            {authState.isLoggedIn &&
                <Button 
                    onPress={ logOut }
                    title='Log out'
                />
            }
            
        </View>
    )
}
