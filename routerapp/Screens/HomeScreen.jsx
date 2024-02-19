import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen() {
    const [state, setState] = useState(0);
    const myRef = useRef()
    const increaseValue = () => {
        if (myRef.current) {
            clearInterval(myRef.current);
        }
        else {
            myRef.current = setInterval(() => {
                setState((pre) => pre + 1);
                console.log("working");
            }, 1000);
        }
    }
    const resetMeClick = () => {
        clearInterval(myRef.current);
        setState(0)
    }
    return (
        <View style={styles.container}>
            <Text>Home Screen {(Math.floor(state / 60) % 24).toString().padStart(2, "0")}:{(Math.floor(state / 60) % 60).toString().padStart(2, "0")}:{(state % 60).toString().padStart(2, "0")}</Text>
            <TouchableOpacity style={styles.buttonDesign} onPress={increaseValue}>
                <Text>
                    Click me
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonDesign} onPress={resetMeClick}>
                <Text>
                    Reset Me
                </Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    buttonDesign: {
        backgroundColor: "red",
        borderRadius: 50,
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
    }
})