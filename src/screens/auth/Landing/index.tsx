import { Image, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { styles } from './Style'
import { Button } from 'react-native-paper'

const Landing = ({ navigation }: { navigation: any }) => {

    return (
        <View style={styles.container}>
            <StatusBar style='light' />
            <Image source={require('../../../assets/images/landing.png')} style={styles.image} />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Simple solution for
                    your budget.
                </Text>
                <Text style={styles.description}>
                    Counter and distribute the income
                    correctly...
                </Text>
                <Button mode='elevated' onPress={() => navigation.navigate('login')} style={styles.button} labelStyle={styles.buttonText} >
                    Continue
                </Button>

            </View>
        </View>
    )
}

export default Landing