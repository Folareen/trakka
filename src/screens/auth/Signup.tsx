import { ActivityIndicator, KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Text as RNPText, Button, Portal, Modal } from 'react-native-paper'
import styles from './Style'
import { StatusBar } from 'expo-status-bar'
import useAuthStore from '../../stores/useAuthStore'
import { signup } from '../../services/auth'

const Signup = ({ navigation }: { navigation: any }) => {
    const [fullname, setFullname] = useState<string>('')
    const [username, setUsername] = useState<string>('')
    const [emailAddress, setEmailAddress] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [accountBalance, setAccountBalance] = useState('')

    const [submitting, setSubmitting] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const store = useAuthStore()

    const handleSubmit = async () => {
        try {
            setError('')
            setSubmitting(true)
            await signup({ fullname, emailAddress, password, accountBalance, username }, store.authenticate)
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
                <RNPText variant="headlineLarge" style={styles.heading}>Signup</RNPText>
                <TextInput
                    mode="outlined"
                    label="Full name"
                    value={fullname}
                    onChangeText={text => setFullname(text)}
                    style={styles.input}
                    contentStyle={styles.inputC}
                />
                <TextInput
                    mode="outlined"
                    label="Username"
                    value={username}
                    onChangeText={text => setUsername(text)}
                    style={styles.input}
                    contentStyle={styles.inputC}
                />
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
                    contentStyle={styles.inputC}
                    secureTextEntry
                />
                <TextInput
                    mode="outlined"
                    label="Account balance"
                    placeholder=""
                    value={accountBalance}
                    onChangeText={text => setAccountBalance(text)}
                    style={styles.input}
                    keyboardType='numeric'
                    contentStyle={styles.inputC}
                />


                <Button mode='elevated' onPress={handleSubmit} style={styles.submitBtn} labelStyle={styles.submitBtnText} >
                    Signup
                </Button>

                <View style={styles.navContainer}>
                    <Text style={{ fontFamily: '400' }}>
                        Have an account?
                    </Text>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('login')
                    }}>
                        <RNPText style={styles.nav}>
                            Login
                        </RNPText>

                    </TouchableOpacity>
                </View>



            </View>

            <StatusBar style='dark' />

        </View>

    )
}

export default Signup