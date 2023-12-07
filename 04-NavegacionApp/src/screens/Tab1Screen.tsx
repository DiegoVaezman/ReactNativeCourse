import React from 'react'
import { useEffect } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import { styles } from '../theme/AppTheme';
import { TochableIcon } from '../components/TochableIcon';


export const Tab1Screen = () => {

    

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Iconos</Text>

            <Text>
                <TochableIcon iconName="airplane-outline" />
                <TochableIcon iconName="attach-outline" />
                <TochableIcon iconName="bonfire-outline" />
                <TochableIcon iconName="calculator-outline" />
                <TochableIcon iconName="chatbubble-ellipses-outline" />
                <TochableIcon iconName="images-outline" />
                <TochableIcon iconName="leaf-outline" />
            </Text>
            
        </View>
    )
}
