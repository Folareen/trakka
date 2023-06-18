import { KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Text as RNPText, Button } from 'react-native-paper'
import styles from './Style'
import { StatusBar } from 'expo-status-bar'

const Login = ({ navigation }: { navigation: any }) => {
    const [emailAddress, setEmailAddress] = useState<string>('')
    const [password, setPassword] = useState<string>('')


    return (
        <ScrollView style={styles.container}>
            <RNPText variant="headlineLarge" style={styles.heading}>Login</RNPText>
            <TextInput
                mode="outlined"
                label="Email"
                value={emailAddress}
                onChangeText={text => setEmailAddress(text)}
                style={styles.input}
            />
            <TextInput
                mode="outlined"
                label="Password"
                placeholder=""
                value={password}
                onChangeText={text => setPassword(text)}
                style={styles.input}
            />

            <TouchableOpacity onPress={() => {
                navigation.navigate('forgot-password')
            }}>
                <RNPText style={styles.forgotPassword}>
                    Forgot password
                </RNPText>

            </TouchableOpacity>


            <Button mode='elevated' onPress={() => navigation.navigate('login')} style={styles.submitBtn} labelStyle={styles.submitBtnText} >
                Login
            </Button>


            <StatusBar style='dark' />

        </ScrollView>

    )
}

export default Login