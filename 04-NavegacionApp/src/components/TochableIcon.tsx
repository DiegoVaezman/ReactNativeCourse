import React from 'react';
import { TouchableOpacity } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { colors } from '../theme/AppTheme';
import { AuthContext } from '../context/authContext';
import { useContext } from 'react';


interface Props {
    iconName: string;
}


export const TochableIcon = ({iconName}: Props) => {

    const { changeFavoriteIcon } = useContext( AuthContext )


    return (
        <TouchableOpacity
            onPress={() => changeFavoriteIcon(iconName)}
        >
            <Icon 
                name={iconName} 
                size={80} 
                color={colors.primary} 
            />
        </TouchableOpacity>    )
}
