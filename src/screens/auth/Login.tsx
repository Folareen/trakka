import { ActivityIndicator, Alert, KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Text as RNPText, Button, Portal, Modal } from 'react-native-paper'
import styles from './Style'
import { StatusBar } from 'expo-status-bar'
import useAuthStore from '../../stores/useAuthStore'
import { login } from '../../services/auth'

const Login = ({ navigation }: { navigation: any }) => {
    const [emailAddress, setEmailAddress] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [submitting, setSubmitting] = useState(false)
    const [error, setError] = useState('')

    const store = useAuthStore()

    const handleSubmit = async () => {
        try {
            setError('')
            setSubmitting(true)
            await login({ emailAddress, password }, store.authenticate)
        } catch (error: any) {
            setError(error.message)
            console.log(error.message, 'log error')
        } finally {
            setSubmitting(false)
        }
    }


    return (
        <View style={styles.outerContainer}>

            <Portal >
                <Modal visible={submitting} dismissable={false} style={styles.overlayContainer} contentContainerStyle={styles.overlayInner}>
                    <ActivityIndicator size={'large'} color='#7F3DFF' />
                </Modal>
            </Portal>

            <Portal >
                <Modal visible={error.trim().length > 0} dismissable={true} style={styles.overlayContainer} contentContainerStyle={[styles.overlayInner, styles.overlayInnerErr]} onDismiss={() => setError('')}>
                    <Text style={styles.overlayInnerErrText}>
                        {error}
                    </Text>
                </Modal>
            </Portal>

            <View style={styles.container}>
                <RNPText variant="headlineLarge" style={styles.heading}>Login</RNPText>
                <TextInput
                    mode="outlined"
                    label="Email address"
                    value={emailAddress}
                    onChangeText={text => setEmailAddress(text)}
                    style={styles.input}
                    contentStyle={styles.inputC}
                />
                <TextInput
                    mode="outlined"
                    label="Password"
                    placeholder=""
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry={true}
                    contentStyle={styles.inputC}
                />

                <TouchableOpacity onPress={() => {
                    navigation.navigate('forgot-password')
                }}>
                    <RNPText style={styles.nav}>
                        Forgot password
                    </RNPText>

                </TouchableOpacity>


                <Button mode='elevated' onPress={handleSubmit} style={styles.submitBtn} labelStyle={styles.submitBtnText} >
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