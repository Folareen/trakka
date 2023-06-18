import { KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Text as RNPText, Button } from 'react-native-paper'
import styles from './Style'
import { StatusBar } from 'expo-status-bar'

const Login = ({ navigation }: { navigation: any }) => {
    const [emailAddress, setEmailAddress] = useState<string>('')
    const [password, setPassword] = useState<string>('')


    return (
        <View style={styles.outerContainer}>
            <View style={styles.container}>
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
                    <RNPText style={styles.nav}>
                        Forgot password
                    </RNPText>

                </TouchableOpacity>


                <Button mode='elevated' onPress={() => navigation.navigate('login')} style={styles.submitBtn} labelStyle={styles.submitBtnText} >
                    Login
                </Button>

                <View style={styles.navContainer}>
                    <Text style={{ fontFamily: '400' }}>
                        Don't have an account?
                    </Text>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('signup')
                    }}>
                        <RNPText style={styles.nav}>
                            Signup
                        </RNPText>

                    </TouchableOpacity>
                </View>


            </View>

            <StatusBar style='dark' />

        </View>

    )
}

export default Login