import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>Box Object Model</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1
    },
    title: {
        fontSize: 20,
        // backgroundColor: 'red',
        borderWidth: 10,
        paddingHorizontal: 100,
        paddingVertical: 20,
        marginHorizontal: 10,
    },
    
})
