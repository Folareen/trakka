import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { styles } from './Style'

const Landing = () => {
    const { container, image, content } = styles

    return (
        <View style={container}>
            <StatusBar style='light' />
            <Image source={require('../../../assets/images/landing.png')} style={image} />

            <View style={content}>

            </View>
        </View>
    )
}

export default Landing