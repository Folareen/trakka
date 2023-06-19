import { KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Text as RNPText, Button, Portal, Modal, ActivityIndicator } from 'react-native-paper'
import styles from './Style'
import { StatusBar } from 'expo-status-bar'
import { resetPassword } from '../../services/auth'
import Toast from 'react-native-root-toast'

const ResetPassword = ({ navigation }: { navigation: any }) => {
    const [emailAddress, setEmailAddress] = useState<string>('')
    const [newPassword, setNewPassword] = useState<string>('')
    const [confirmNewPassword, setConfirmNewPassword] = useState<string>('')
    const [passwordResetToken, setPasswordResetToken] = useState<string>('')
    const [submitting, setSubmitting] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const handleSubmit = async () => {
        try {
            setError('')
            setSubmitting(true)
            if (newPassword != confirmNewPassword) {
                throw new Error('Passwords do not match')
            }
            await resetPassword({ emailAddress, newPassword, passwordResetToken })
            Toast.show('Password changed!', { position: 50, backgroundColor: 'green', duration: Toast.durations.LONG, shadow: true, animation: true, hideOnPress: true })
            navigation.navigate('login')
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
                <RNPText variant="headlineLarge" style={styles.heading}>Change password</RNPText>
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
                    label="New password"
                    value={newPassword}
                    onChangeText={text => setNewPassword(text)}
                    style={styles.input}
                    contentStyle={styles.inputC}
                    secureTextEntry
                />
                <TextInput
                    mode="outlined"
                    label="Confirm new password"
                    value={confirmNewPassword}
                    onChangeText={text => setConfirmNewPassword(text)}
                    style={styles.input}
                    contentStyle={styles.inputC}
                    secureTextEntry
                />
                <TextInput
                    mode="outlined"
                    label="Password reset token"
                    value={passwordResetToken}
                    onChangeText={text => setPasswordResetToken(text)}
                    style={styles.input}
                    contentStyle={styles.inputC}
                    keyboardType='numeric'
                />


                <Button mode='elevated' onPress={handleSubmit} style={styles.submitBtn} labelStyle={styles.submitBtnText} >
                    Change password
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

export default ResetPassword