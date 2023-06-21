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
                    Take control of your finances effortlessly
                </Text>
                <Text style={styles.description}>
                    Track and manage your income and expenses
                    with ease and precision...
                </Text>
                <Button mode='elevated' onPress={() => navigation.navigate('login')} style={styles.button} labelStyle={styles.buttonText} >
                    Continue
                </Button>

            </View>
        </View>
    )
}

export default Landing