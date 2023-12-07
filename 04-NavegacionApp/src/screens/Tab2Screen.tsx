import React from 'react'
import { Text, View } from 'react-native'
import { useEffect } from 'react';

export const Tab2Screen = () => {

    useEffect(() => {
        console.log('tab2 screen')
    }, [])
    return (
        <View>
            <Text>Tab2 Screen</Text>
        </View>
    )
}
