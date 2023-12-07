import React from 'react'
import { useContext } from 'react';
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles, colors } from '../theme/AppTheme';
import { AuthContext } from '../context/authContext';
import Icon from 'react-native-vector-icons/Ionicons';


export const SettingsScreen = () => {

    //con este hook contruido por los de react native permite ponerle un top de manera que no estorben partes superiores de moviles como en iphone. se implementa en el "Css"
    const insets = useSafeAreaInsets();

    const { authState } = useContext(AuthContext);


    return (
        <View style={{
            ...styles.globalMargin,
            marginTop: insets.top + 20
        }}>
            <Text style={styles.title}>Settings Screen</Text>

            <Text>{JSON.stringify(authState, null, 4)}</Text>

            {
                authState.favoriteIcon &&
                <Icon
                    name={authState.favoriteIcon}
                    size={150}
                    color={colors.primary}
                />
            }

        </View>
    )
}
