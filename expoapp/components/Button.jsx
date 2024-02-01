import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Button() {
    return (<TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.textColor}>Button</Text>
    </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    textColor: {
        color: 'white'
    },
    buttonStyle: {
        backgroundColor: '#000000',
        borderRadius: 10,
        padding: 10,
        // margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        height: 50,
    }
})