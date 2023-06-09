import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Landing = () => {
    const { container } = styles

    return (
        <View style={container}>
            <Text>Landing</Text>
        </View>
    )
}

export default Landing

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue'
    }
})