import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Text as RNPText, Button, Portal, Modal } from 'react-native-paper'
import styles from './Style'
import { StatusBar } from 'expo-status-bar'
import { requestPasswordReset } from '../../services/auth'
import Toast from 'react-native-root-toast'

const ForgotPassword = ({ navigation }: { navigation: any }) => {
    const [emailAddress, setEmailAddress] = useState<string>('')

    const [submitting, setSubmitting] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const handleSubmit = async () => {
        try {
            setError('')
            setSubmitting(true)
            await requestPasswordReset(emailAddress)
            Toast.show('Password reset token has been sent to your email!', { position: 50, backgroundColor: 'green', duration: Toast.durations.LONG, shadow: true, animation: true, hideOnPress: true })
            navigation.navigate('reset-password')
        } catch (error: any) {
            setError(error.message)
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
                <RNPText variant="headlineLarge" style={styles.heading}>Forgot password</RNPText>
                <TextInput
                    mode="outlined"
                    label="Email address"
                    value={emailAddress}
                    onChangeText={text => setEmailAddress(text)}
                    style={styles.input}
                    contentStyle={styles.inputC}
                />


                <Button mode='elevated' onPress={handleSubmit} style={styles.submitBtn} labelStyle={styles.submitBtnText} >
                    Reset password
                </Button>

                <View style={[styles.navContainer, { marginBottom: 0 }]}>
                    <Text style={{ fontFamily: '400' }}>
                        Remember password?
                    </Text>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('login')
                    }}>
                        <RNPText style={styles.nav}>
                            Login
                        </RNPText>

                    </TouchableOpacity>
                </View>

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

export default ForgotPassword